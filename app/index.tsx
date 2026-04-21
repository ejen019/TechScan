import {View, Text, Button} from 'react-native';
import {useRouter} from 'expo-router';

export default function Accueil() {
    const router = useRouter();

    return (
        <View style={{flex: 1, justifyContent:'center'}}>
            <Text>
                TechScan
            </Text>
            <Button title="Scanner" onPress={() => router.push('/scan')}>
                
            </Button>
        </View>
    );
}