import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './HomeScreen.styles';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Header } from '../components/Header';
import { CategoryTabs } from '../components/CategoryTabs';
import { DoctorCard } from '../components/DoctorCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CATEGORIES = ['Cardiologista', 'Nefrologista', 'Neurologista', 'Hepatologista'];

const DOCTORS = [
    {
        id: '1',
        name: 'Dr. John Doe',
        specialty: 'Clínico Geral\nSão Paulo.',
        imageUrl: 'https://i.pravatar.cc/150?img=1',
        description: 'Você gostaria de agendar esta consulta?',
        dateStr: '01 Aug',
        timeStr: 'Time 11:AM',
        isActive: false,
    },
    {
        id: '2',
        name: 'Dra. Maria Clara',
        specialty: 'Clínico Geral\nSão Paulo.',
        imageUrl: 'https://i.pravatar.cc/150?img=5',
        description: 'Você gostaria de agendar esta consulta?',
        dateStr: '01 Aug',
        timeStr: 'Time 11:AM',
        isActive: false,
    },
    {
        id: '3',
        name: 'Dr. Pedro Paulo',
        specialty: 'Clínico Geral\nSão Paulo.',
        imageUrl: 'https://i.pravatar.cc/150?img=11',
        description: 'Você gostaria de agendar esta consulta?',
        dateStr: '01 Aug',
        timeStr: 'Time 11:AM',
        isActive: true,
    },
    {
        id: '4',
        name: 'Dra. Emily Johnson',
        specialty: 'Clínico Geral\nSão Paulo.',
        imageUrl: 'https://i.pravatar.cc/150?img=9',
        description: 'Você gostaria de agendar esta consulta?',
        dateStr: '01 Aug',
        timeStr: 'Time 11:AM',
        isActive: false,
    },
];

const HomeScreen = ({ navigation }: any) => {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <Header title="Consultas agendadas" showBack={false} />

            <CategoryTabs
                categories={CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            <FlatList
                data={DOCTORS}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={[styles.listContent, { paddingBottom: 100 + insets.bottom }]} // Space for bottom tabs
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <DoctorCard
                        name={item.name}
                        specialty={item.specialty}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        dateStr={item.dateStr}
                        timeStr={item.timeStr}
                        isActive={item.isActive}
                        onPress={() => navigation.navigate('DoctorDetails')}
                    />
                )}
            />
        </View>
    );
};


export default HomeScreen;
