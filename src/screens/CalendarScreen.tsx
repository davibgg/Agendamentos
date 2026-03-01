import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './CalendarScreen.styles';
import { ArrowRight, ArrowLeft, Bell, Smartphone, Home } from 'lucide-react-native';
import { WideDoctorCard } from '../components/WideDoctorCard';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const REGIONS = ['Brasília', 'São Paulo', 'Rio de Janeiro',];
const VISITS = [
    { id: 'tele', label: 'Consulta on-line', icon: 'phone' },
    { id: 'home', label: 'Visita domiciliar', icon: 'home' }
];

const DOCTORS = [
    {
        id: '1',
        name: 'Dr. João Silva',
        location: 'São Paulo',
        rating: 4.9,
        description: 'Clínico geral com 10 anos de experiência',
        imageUrl: 'https://i.pravatar.cc/150?img=47'
    },
    {
        id: '2',
        name: 'Dr. Maria Silva',
        location: 'Ginecologista',
        rating: 4.8,
        description: 'Especialista em ginecologia e obstetrícia',
        imageUrl: 'https://i.pravatar.cc/150?img=44'
    }
];

const WelcomeListScreen = ({ navigation }: any) => {
    const insets = useSafeAreaInsets();
    const [selectedRegion, setSelectedRegion] = useState('São Paulo');
    const [selectedVisit, setSelectedVisit] = useState('Visita domiciliar');

    return (
        <View style={styles.container}>
            <View style={[styles.topSection, { paddingTop: insets.top + Spacing.md }]}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <Text style={styles.title}>Agendar consulta</Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <Bell color={Colors.black} size={20} />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>

                {/* Região */}
                <Text style={styles.sectionTitle}>Por favor, selecione sua região</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {REGIONS.map((region) => (
                        <TouchableOpacity
                            key={region}
                            style={[styles.chip, selectedRegion === region && styles.chipActive]}
                            onPress={() => setSelectedRegion(region)}
                        >
                            <View style={[styles.radio, selectedRegion === region && styles.radioActive]}>
                                {selectedRegion === region && <View style={styles.radioInner} />}
                            </View>
                            <Text style={styles.chipText}>{region}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Tipo de visita */}
                <Text style={styles.sectionTitle}>Por favor, selecione o tipo de visita</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {VISITS.map((visit) => (
                        <TouchableOpacity
                            key={visit.id}
                            style={[styles.chip, selectedVisit === visit.label && styles.chipActive, styles.chipVisit]}
                            onPress={() => setSelectedVisit(visit.label)}
                        >
                            {visit.icon === 'phone' ? (
                                <Smartphone size={16} color={Colors.black} style={styles.chipIcon} />
                            ) : (
                                <Home size={16} color={Colors.black} style={styles.chipIcon} />
                            )}
                            <Text style={styles.chipText}>{visit.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.listHeaderRow}>
                    <Text style={styles.listTitle}>Médicos disponíveis</Text>
                    <TouchableOpacity style={styles.arrowIcon}>
                        <ArrowRight size={16} color={Colors.textSecondary} />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    contentContainerStyle={[styles.listContent, { paddingBottom: 100 + insets.bottom }]}
                    showsVerticalScrollIndicator={false}
                >
                    {DOCTORS.map((doc) => (
                        <WideDoctorCard
                            key={doc.id}
                            {...doc}
                            onPress={() => navigation.navigate('DoctorDetails')}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};


export default WelcomeListScreen;
