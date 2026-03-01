import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.card,
        borderRadius: 24,
        padding: Spacing.sm,
        flexDirection: 'row',
        marginBottom: Spacing.md,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 16,
        marginRight: Spacing.md,
        backgroundColor: Colors.cardSecondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        ...Typography.body1,
        fontWeight: '600',
        marginBottom: 4,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    statsText: {
        ...Typography.caption,
        color: Colors.textSecondary,
        marginLeft: 4,
    },
    spacer: {
        width: 8,
    },
    starIcon: {
        marginLeft: 8,
    },
    description: {
        ...Typography.caption,
        lineHeight: 18,
    },
});
