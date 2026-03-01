import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

export const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.md,
    },
    scrollContent: {
        paddingHorizontal: Spacing.md,
        gap: Spacing.sm,
    },
    tab: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: 12,
        borderRadius: 24,
        backgroundColor: Colors.cardSecondary,
    },
    activeTab: {
        backgroundColor: Colors.primary,
    },
    tabText: {
        ...Typography.body2,
        color: Colors.textSecondary,
    },
    activeTabText: {
        color: Colors.black,
        fontWeight: '500',
    },
});
