import {View, Text, Button} from 'react-native';
import {useRouter} from 'expo-router';

export default function Accueil() {
    const router = useRouter();

    return (
        <View>
            <Text>
                TechScan
            </Text>
            <Button title="Scanner" onPress={() => router.push('/scan')}>
                
            </Button>
        </View>
    );
}