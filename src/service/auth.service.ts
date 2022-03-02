import api from "./api";
import { User } from "../interfaces/user.interface"
class AuthService {
    login = async (data: User) => {
        const response = await api
        .post("/auth/signin", {
            username: data.username,
            password: data.password
        });
        return response.data;
    }
    
    logout = () => localStorage.removeItem("user");

    register = (data: User) => {
        return api.post("/auth/signup", {
            username: data.username,
            password: data.password,
            email: data.email
        });
    }
}
export default new AuthService();