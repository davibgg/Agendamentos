import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Header.styles';
import { ArrowLeft, Bell } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
    title: string;
    onBack?: () => void;
    showBack?: boolean;
}

export const Header = ({ title, onBack, showBack = true }: HeaderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top + Spacing.md }]}>
            {showBack ? (
                <TouchableOpacity style={styles.iconButton} onPress={onBack}>
                    <ArrowLeft color={Colors.text} size={20} />
                </TouchableOpacity>
            ) : (
                <View style={styles.iconPlaceholder} />
            )}

            <Text style={styles.title}>{title}</Text>

            <TouchableOpacity style={styles.iconButton}>
                <Bell color={Colors.text} size={20} />
                <View style={styles.notificationDot} />
            </TouchableOpacity>
        </View>
    );
};

