import { useState, useEffect } from "react";
import axios from "axios";
import { Home } from "../screens";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
} from "react-native";

import { Header } from "../components";

export const Users = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [filteredUser, setFilteredUser] = useState();

    //get data from api
    const getAllUsers = async () => {
        let { data } = await axios.get("http://10.0.2.2:3000/api/v1/auth/allusers");
        setUsers(data.users);
    };

    //get data on the first render
    useEffect(() => {
        getAllUsers();
    }, []);

    // filtered array to pick users that starts with the searches value
    useEffect(() => {
        const filteredUser = users?.filter((item) =>
            item?.userName.toLowerCase().includes(searchField?.toLowerCase())
        );
        setFilteredUser(filteredUser);
    }, [users, searchField]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#10bbb3" }}>
            <StatusBar barStyle={"light-content"} />

            <View style={styles.container}>
                <Header />
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon size={20} icon={faSearch} color="#10bbb3" />
                    <TextInput
                        onChangeText={(text) => setSearchField(text)}
                        style={styles.search}
                        className="search"
                        type="search"
                        placeholder="Search user name "
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {filteredUser?.map((user, index) => {
                        return (
                            <View style={styles.userContainer} key={index}>
                                <FontAwesomeIcon
                                    size={30}
                                    icon={faUserCircle}
                                    color="#10bbb3"
                                />
                                <View style={styles.details}>
                                    <Text style={styles.name}>{user.userName}</Text>
                                    <Text style={styles.email}>{user.email}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.send}
                                    onPress={() => {
                                        console.log("hello");
                                        navigation.navigate("SendMessage", {
                                            id: user._id,
                                            name: user.userName,
                                        });
                                    }}
                                >
                                    <FontAwesomeIcon
                                        size={20}
                                        icon={faPaperPlane}
                                        color="#10bbb3"
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eff2f5",
        paddingBottom: 0,
        flex: 1,
    },
    userContainer: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        padding: 15,
        margin: 20,
        marginTop: 0,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#10bbb3",
        backgroundColor: "#fff",
    },
    details: {
        disply: "flex",
        flexDirection: "column",
        marginLeft: 15,
        marginRight: "auto",
    },
    send: {
        marginLeft: "auto",
        border: "none",
        outline: "none",
        padding: 20,
    },
    name: {
        fontSize: 20,
        textTransform: "capitalize",
    },
    email: {
        color: "gray",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#fff",
        margin: 20,
        borderRadius: 10,
        overflow: "hidden",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    search: {
        border: "none",
        outline: "none",
        fontSize: 18,
        backgroundColor: "#fff",
        width: "90%",
        fontWeight: "500",
        marginLeft: 20,
    },
});
