import { TextStyle } from 'react-native';
import { Colors } from './colors';

export const Typography = {
    h1: {
        fontSize: 28,
        fontWeight: '700',
        color: Colors.text,
    } as TextStyle,
    h2: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.text,
    } as TextStyle,
    h3: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.text,
    } as TextStyle,
    body1: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.text,
    } as TextStyle,
    body2: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.textSecondary,
    } as TextStyle,
    caption: {
        fontSize: 12,
        fontWeight: '400',
        color: Colors.textSecondary,
    } as TextStyle,
};
