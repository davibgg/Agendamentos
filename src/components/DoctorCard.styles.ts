import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.card,
        borderRadius: 24,
        padding: Spacing.md,
        width: '48%', // Approx half with gap
        marginBottom: Spacing.md,
    },
    activeContainer: {
        backgroundColor: Colors.primary,
    },
    headerRow: {
        flexDirection: 'row',
        marginBottom: Spacing.sm,
        alignItems: 'center',
    },
    image: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: Spacing.sm,
        backgroundColor: Colors.cardSecondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerInfo: {
        flex: 1,
    },
    name: {
        ...Typography.body1,
        fontWeight: '600',
        marginBottom: 2,
    },
    specialty: {
        ...Typography.caption,
    },
    description: {
        ...Typography.body2,
        lineHeight: 20,
        height: 60, // approximate 3 lines
        marginBottom: Spacing.md,
    },
    footerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateTimeContainer: {
        flex: 1,
    },
    date: {
        ...Typography.body2,
        fontWeight: '600',
    },
    time: {
        ...Typography.caption,
    },
    arrowButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowButtonInactive: {
        borderWidth: 1,
        borderColor: Colors.border,
    },
    arrowButtonActive: {
        backgroundColor: Colors.black,
    },
});
