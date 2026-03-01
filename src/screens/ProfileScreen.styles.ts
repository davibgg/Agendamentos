import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContent: {
        paddingHorizontal: Spacing.md,
        paddingTop: Spacing.md,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.cardSecondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.md,
    },
    userName: {
        ...Typography.h2,
        marginBottom: 4,
    },
    userEmail: {
        ...Typography.body2,
        color: Colors.textSecondary,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Spacing.xl,
        gap: Spacing.md,
    },
    statCard: {
        flex: 1,
        backgroundColor: Colors.card,
        borderRadius: 24,
        padding: Spacing.lg,
        alignItems: 'center',
    },
    statValue: {
        ...Typography.h1,
        color: Colors.primary,
        marginBottom: 4,
    },
    statLabel: {
        ...Typography.caption,
        color: Colors.text,
    },
    menuSection: {
        backgroundColor: Colors.card,
        borderRadius: 24,
        padding: Spacing.sm,
    },
    menuItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Spacing.md,
    },
    menuItemIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.cardSecondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.md,
    },
    menuItemText: {
        flex: 1,
        ...Typography.body1,
        fontWeight: '500',
    },
    menuItemTextDestructive: {
        color: '#FF4D4D',
    },
});
