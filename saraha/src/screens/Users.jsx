import { useState, useEffect } from "react";
import axios from "axios";
import LottieView from 'lottie-react-native';
///icons 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
//components 
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Platform,
} from "react-native";
import { Header } from "../components";
import notFound from '../assets/animations/notFoundUser.json'

export const Users = ({ navigation }) => {
    const url = Platform.OS === 'android' ? 'http://10.0.2.2:3000/api/v1/auth/allusers' : 'http://localhost:3000/api/v1/auth/allusers'
    const [users, setUsers] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [filteredUser, setFilteredUser] = useState();

    //get data from api
    const getAllUsers = async () => {
        let { data } = await axios.get(url);
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
                <Header title='Users' />
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon style={{ marginLeft: 20 }} size={20} icon={faSearch} color="#10bbb3" />
                    <TextInput
                        onChangeText={(text) => setSearchField(text)}
                        style={styles.search}
                        className="search"
                        type="search"
                        placeholder="Search user name "
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {filteredUser?.length ?

                        filteredUser.map((user, index) => {
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
                        }) : <>
                            <Text style={styles.noUser}>No User Found </Text>
                            <LottieView style={{ alignSelf: 'center', width: 200, height: 250 }} source={notFound} autoPlay loop /></>
                    }
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
        padding: ` ${Platform.OS === 'android' ? '0%' : '2%'}`,
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
    noUser: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 40,
        textAlign: 'center',
        color: "#10bbb3",
    }
});
