import { StyleSheet } from 'react-native';
import { Spacing } from '../theme/spacing';

export const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: Spacing.lg,
        left: Spacing.xl,
        right: Spacing.xl,
        height: 70,
        borderRadius: 32,
        borderTopWidth: 0,
        elevation: 0,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
    gradientContainer: {
        ...StyleSheet.absoluteFillObject,
    },
    borderSurface: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 32,
        borderWidth: 0.8,
        borderColor: 'rgba(255,255,255,0.14)',
    },
    tabBarItemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIconStyle: {
        marginTop: 10,
    },
    iconWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
