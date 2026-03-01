import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './WideDoctorCard.styles';
import { MapPin, Star, User } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

interface WideDoctorCardProps {
    name: string;
    location: string;
    rating: number;
    description: string;
    imageUrl: string;
    onPress?: () => void;
}

export const WideDoctorCard = ({ name, location, rating, description, imageUrl, onPress }: WideDoctorCardProps) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
            <View style={styles.image}>
                <User color={Colors.textSecondary} size={40} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.statsRow}>
                    <MapPin size={14} color={Colors.primary} />
                    <Text style={styles.statsText}>{location}</Text>
                    <View style={styles.spacer} />
                    <Star size={14} color={Colors.primary} style={styles.starIcon} />
                    <Text style={styles.statsText}>{rating}</Text>
                </View>
                <Text style={styles.description} numberOfLines={2}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

