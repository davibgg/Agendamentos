import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Dimensions, StyleSheet } from 'react-native';
import { styles } from './DoctorDetailsScreen.styles';
import { ArrowLeft, Bell, Calendar as CalendarIcon, Search, SlidersHorizontal, Heart, MessageCircle, User } from 'lucide-react-native';

import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
    runOnJS
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3;

const DATES = ['Hoje, 26 Jul', 'Amanhã, 27 Jul', 'Depois...'];
const SLOTS = ['Hoje, 26 Jul', 'Hoje, 26 Jul', 'Hoje, 26 Jul', 'Hoje, 26 Jul'];

interface DoctorData {
    id: string;
    name: string;
    status: string;
}

const INITIAL_DOCTORS: DoctorData[] = [
    { id: '1', name: 'Dr. Marcos silva', status: 'Disponível hoje' },
    { id: '2', name: 'Dr. João silva', status: 'Disponível hoje' },
    { id: '3', name: 'Dr. Maria silva', status: 'Disponível amanhã' },
];

interface SwipeableCardProps {
    doctor: DoctorData;
    isTop: boolean;
    isNext: boolean;
    onSwiped: () => void;
}

const SwipeableCard = ({ doctor, isTop, isNext, onSwiped }: SwipeableCardProps) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const panGesture = Gesture.Pan()
        .onStart(() => { })
        .onUpdate((event) => {
            translateX.value = event.translationX;
            translateY.value = event.translationY;
        })
        .onEnd((event) => {
            if (Math.abs(event.translationX) > SWIPE_THRESHOLD) {
                translateX.value = withTiming(Math.sign(event.translationX) * SCREEN_WIDTH, { duration: 250 }, () => {
                    runOnJS(onSwiped)();
                });
            } else {
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        });

    const animatedStyle = useAnimatedStyle(() => {
        const rotate = `${(translateX.value / SCREEN_WIDTH) * 15}deg`;
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { rotate },
                { scale: isTop ? 1 : 0.95 }
            ],
            opacity: isNext || isTop ? 1 : 0,
            zIndex: isTop ? 10 : 1,
        };
    });

    const isActive = isTop;
    const cardColorStyle = isActive ? styles.cardActive : styles.cardInactive;

    return (
        <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
            {isTop ? (
                <GestureDetector gesture={panGesture}>
                    <Animated.View style={[styles.cardContainer, cardColorStyle, animatedStyle]}>
                        <CardContent doctor={doctor} isActive={isActive} />
                    </Animated.View>
                </GestureDetector>
            ) : (
                <Animated.View style={[styles.cardContainer, cardColorStyle, animatedStyle]}>
                    <CardContent doctor={doctor} isActive={isActive} />
                </Animated.View>
            )}
        </View>
    );
};

const CardContent = ({ doctor, isActive }: { doctor: DoctorData; isActive: boolean }) => (
    <>
        <View style={styles.cardHeaderRow}>
            <View style={styles.cardAvatar}>
            </View>
            <Text style={[styles.cardStatus, isActive && styles.cardStatusActive]}>{doctor.status}</Text>
            <View style={styles.spacerFlex} />
            <TouchableOpacity style={[styles.actionBtn, isActive ? styles.actionBtnActive : styles.actionBtnInactive]}>
                <Heart size={20} color={isActive ? Colors.black : Colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionBtn, isActive ? styles.actionBtnActive : styles.actionBtnInactive, styles.actionBtnMargin]}>
                <MessageCircle size={20} color={isActive ? Colors.black : Colors.text} />
            </TouchableOpacity>
        </View>
        <Text style={[styles.doctorName, isActive && styles.doctorNameActive]}>{doctor.name}</Text>
        <View style={styles.slotsGrid}>
            {SLOTS.map((slot, index) => (
                <TouchableOpacity
                    key={index.toString()}
                    style={[styles.slotBtn, isActive ? styles.slotBtnActive : styles.slotBtnInactive]}
                >
                    <Text style={[styles.slotText, isActive && styles.slotTextActive]}>{slot}</Text>
                </TouchableOpacity>
            ))}
        </View>
        {isActive && (
            <TouchableOpacity style={styles.viewAllBtn}>
                <Text style={styles.viewAllText}>Agendar</Text>
            </TouchableOpacity>
        )}
    </>
);

const DoctorDetailsScreen = ({ navigation }: any) => {
    const insets = useSafeAreaInsets();
    const [activeDate, setActiveDate] = useState(DATES[0]);
    const [doctors, setDoctors] = useState(INITIAL_DOCTORS);

    const handleSwiped = () => {
        setDoctors((prev) => prev.slice(1));
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top + Spacing.md }]}>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
                    <ArrowLeft color={Colors.text} size={20} />
                </TouchableOpacity>
                <View style={styles.topBarRight}>
                    <TouchableOpacity style={styles.iconButton}>
                        <CalendarIcon color={Colors.text} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Bell color={Colors.text} size={20} />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.pageTitle}>Agendar consulta</Text>

            <View style={styles.searchRow}>
                <View style={styles.searchBar}>
                    <Search color={Colors.textSecondary} size={20} />
                    <TextInput
                        placeholder="Pesquisar"
                        placeholderTextColor={Colors.textSecondary}
                        style={styles.searchInput}
                    />
                </View>
                <TouchableOpacity style={styles.filterBtn}>
                    <SlidersHorizontal color={Colors.text} size={20} />
                </TouchableOpacity>
            </View>

            <View style={styles.datesContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {DATES.map((date) => (
                        <TouchableOpacity
                            key={date}
                            style={[styles.dateChip, activeDate === date && styles.dateChipActive]}
                            onPress={() => setActiveDate(date)}
                        >
                            <Text style={[styles.dateChipText, activeDate === date && styles.dateChipTextActive]}>{date}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.cardsScrollContent}>
                <View style={styles.stackBackdrop} />
                <View style={styles.stackBackdrop2} />

                {doctors.length === 0 ? (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                        <Text style={{ color: Colors.textSecondary, ...Typography.body1 }}>Nenhum médico restante.</Text>
                        <TouchableOpacity onPress={() => setDoctors(INITIAL_DOCTORS)} style={{ marginTop: 20 }}>
                            <Text style={{ color: Colors.primary, ...Typography.h3 }}>Recarregar</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    [...doctors].reverse().map((doc, index, arr) => {
                        const originalIndex = arr.length - 1 - index;
                        return (
                            <SwipeableCard
                                key={doc.id}
                                doctor={doc}
                                isTop={originalIndex === 0}
                                isNext={originalIndex === 1}
                                onSwiped={handleSwiped}
                            />
                        );
                    })
                )}
            </View>
        </View>
    );
};


export default DoctorDetailsScreen;
