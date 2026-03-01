import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    topSection: {
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        paddingBottom: Spacing.xl,
        paddingHorizontal: Spacing.md,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Spacing.xl,
    },
    title: {
        ...Typography.h3,
        color: Colors.black,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationDot: {
        position: 'absolute',
        top: 10,
        right: 12,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FF4D4D',
    },
    sectionTitle: {
        ...Typography.body1,
        color: Colors.black,
        fontWeight: '600',
        marginBottom: Spacing.sm,
    },
    scrollContent: {
        gap: Spacing.sm,
        marginBottom: Spacing.lg,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing.md,
        paddingVertical: 10,
        borderRadius: 24,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    chipActive: {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    chipVisit: {
        paddingVertical: 14,
    },
    chipIcon: {
        marginRight: 8,
    },
    radio: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    radioActive: {
        borderColor: Colors.black,
    },
    radioInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.black,
    },
    chipText: {
        ...Typography.body2,
        color: Colors.black,
        fontWeight: '500',
    },
    bottomSection: {
        flex: 1,
        paddingTop: Spacing.xl,
    },
    listHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.md,
    },
    listTitle: {
        ...Typography.h2,
    },
    arrowIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: Colors.card,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContent: {
        paddingHorizontal: Spacing.md,
    },
});
