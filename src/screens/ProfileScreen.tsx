import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './ProfileScreen.styles';
import { User, Settings, CreditCard, HelpCircle, LogOut, ChevronRight, Bell } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';
import { Header } from '../components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MENU_ITEMS = [
    { id: '1', title: 'Informações pessoais', icon: User },
    { id: '2', title: 'Método de pagamento', icon: CreditCard },
    { id: '3', title: 'Notificações', icon: Bell },
    { id: '4', title: 'Configurações', icon: Settings },
    { id: '5', title: 'Central de ajuda', icon: HelpCircle },
];

const MenuItem = ({ title, Icon, isDestructive = false }: any) => {
    return (
        <TouchableOpacity style={styles.menuItemContainer}>
            <View style={styles.menuItemIcon}>
                <Icon size={20} color={isDestructive ? '#FF4D4D' : Colors.text} />
            </View>
            <Text style={[styles.menuItemText, isDestructive && styles.menuItemTextDestructive]}>
                {title}
            </Text>
            {!isDestructive && <ChevronRight size={20} color={Colors.textSecondary} />}
        </TouchableOpacity>
    );
};

const ProfileScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <Header title="Perfil" showBack={false} />
            <ScrollView
                contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 + insets.bottom }]}
                showsVerticalScrollIndicator={false}
            >
                {/* Perfil */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}>
                        <User color={Colors.white} size={40} />
                    </View>
                    <Text style={styles.userName}>Davi</Text>
                    <Text style={styles.userEmail}>davibio2003@outlook.com</Text>
                </View>

                {/* Cards */}
                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>12</Text>
                        <Text style={styles.statLabel}>Concluídas</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>4</Text>
                        <Text style={styles.statLabel}>Próximas</Text>
                    </View>
                </View>

                {/* Itens do menu */}
                <View style={styles.menuSection}>
                    {MENU_ITEMS.map(item => (
                        <MenuItem key={item.id} title={item.title} Icon={item.icon} />
                    ))}
                    <MenuItem title="Sair" Icon={LogOut} isDestructive />
                </View>
            </ScrollView>
        </View>
    );
};


export default ProfileScreen;
