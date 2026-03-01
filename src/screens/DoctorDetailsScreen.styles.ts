import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.xl,
    },
    topBarRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.card,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginLeft: Spacing.sm,
    },
    notificationDot: {
        position: 'absolute',
        top: 12,
        right: 14,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FF4D4D',
    },
    pageTitle: {
        ...Typography.h1,
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.lg,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.lg,
        gap: Spacing.md,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.card,
        borderRadius: 24,
        paddingHorizontal: Spacing.md,
        height: 52,
    },
    searchInput: {
        flex: 1,
        marginLeft: Spacing.sm,
        color: Colors.text,
        ...Typography.body1,
    },
    filterBtn: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: Colors.card,
        alignItems: 'center',
        justifyContent: 'center',
    },
    datesContainer: {
        marginBottom: Spacing.xl,
    },
    scrollContent: {
        paddingHorizontal: Spacing.md,
        gap: Spacing.sm,
    },
    dateChip: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: 14,
        borderRadius: 24,
        backgroundColor: Colors.card,
    },
    dateChipActive: {
        backgroundColor: Colors.primary,
    },
    dateChipText: {
        ...Typography.body2,
        color: Colors.textSecondary,
    },
    dateChipTextActive: {
        color: Colors.black,
        fontWeight: '500',
    },
    stackBackdrop: {
        position: 'absolute',
        top: -12,
        left: '5%',
        right: '5%',
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 24,
    },
    stackBackdrop2: {
        position: 'absolute',
        top: -6,
        left: '2%',
        right: '2%',
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 24,
    },
    cardContainer: {
        borderRadius: 32,
        padding: Spacing.lg,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    cardActive: {
        backgroundColor: Colors.primary,
    },
    cardInactive: {
        backgroundColor: Colors.card,
    },
    cardHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    cardAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: Spacing.sm,
        backgroundColor: Colors.cardSecondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardStatus: {
        ...Typography.body2,
        color: Colors.textSecondary,
    },
    cardStatusActive: {
        color: Colors.black,
    },
    actionBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionBtnActive: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    actionBtnInactive: {
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    doctorName: {
        ...Typography.h2,
        marginBottom: Spacing.lg,
    },
    doctorNameActive: {
        color: Colors.black,
    },
    slotsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 8,
        marginBottom: Spacing.lg,
    },
    slotBtn: {
        width: '48%',
        paddingVertical: 14,
        borderRadius: 24,
        alignItems: 'center',
    },
    slotBtnActive: {
        backgroundColor: 'rgba(0,0,0,0.08)',
    },
    slotBtnInactive: {
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    slotText: {
        ...Typography.body2,
    },
    slotTextActive: {
        color: Colors.black,
        fontWeight: '500',
    },
    viewAllBtn: {
        backgroundColor: Colors.black,
        borderRadius: 32,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewAllText: {
        ...Typography.body1,
        color: Colors.primary,
        fontWeight: '600',
    },
    spacerFlex: {
        flex: 1,
    },
    actionBtnMargin: {
        marginLeft: 8,
    },
    cardsScrollContent: {
        flex: 1,
        position: 'relative',
        paddingHorizontal: Spacing.md,
    },
});
