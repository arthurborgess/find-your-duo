import { ImageBackground } from "react-native";
import { styles } from "./styles";
import backgroundImg from '../../assets/background-galaxy.png';

export const Background = ({ children }: { children: React.ReactNode }) => {
    return (
        <ImageBackground
            source={backgroundImg}
            defaultSource={backgroundImg}
            style={styles.container}
        >
            {children}
        </ImageBackground>
    )
}   