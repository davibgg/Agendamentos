import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './DoctorCard.styles';
import { ArrowUpRight, User } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

interface DoctorCardProps {
    name: string;
    specialty: string;
    imageUrl: string;
    description: string;
    dateStr: string;
    timeStr: string;
    isActive?: boolean;
    onPress?: () => void;
}

export const DoctorCard = ({
    name,
    specialty,
    imageUrl,
    description,
    dateStr,
    timeStr,
    isActive = false,
    onPress,
}: DoctorCardProps) => {
    const containerStyle = [styles.container, isActive && styles.activeContainer];
    const textColor = isActive ? Colors.black : Colors.text;
    const subtextColor = isActive ? Colors.black : Colors.textSecondary;

    return (
        <TouchableOpacity style={containerStyle} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.headerRow}>
                <View style={styles.image}>
                    <User color={Colors.textSecondary} size={24} />
                </View>
                <View style={styles.headerInfo}>
                    <Text style={[styles.name, { color: textColor }]} numberOfLines={2}>
                        {name}
                    </Text>
                    <Text style={[styles.specialty, { color: subtextColor }]} numberOfLines={1}>
                        {specialty}
                    </Text>
                </View>
            </View>

            <Text style={[styles.description, { color: subtextColor }]} numberOfLines={3}>
                {description}
            </Text>

            <View style={styles.footerRow}>
                <View style={styles.dateTimeContainer}>
                    <Text style={[styles.date, { color: textColor }]}>{dateStr}</Text>
                    <Text style={[styles.time, { color: subtextColor }]}>{timeStr}</Text>
                </View>
                <View style={[styles.arrowButton, isActive ? styles.arrowButtonActive : styles.arrowButtonInactive]}>
                    <ArrowUpRight size={18} color={isActive ? Colors.text : Colors.textSecondary} />
                </View>
            </View>
        </TouchableOpacity>
    );
};


