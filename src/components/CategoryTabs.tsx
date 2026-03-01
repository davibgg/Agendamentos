import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './CategoryTabs.styles';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

interface CategoryTabsProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export const CategoryTabs = ({ categories, activeCategory, onSelectCategory }: CategoryTabsProps) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {categories.map((item, index) => {
                    const isActive = item === activeCategory;
                    return (
                        <TouchableOpacity
                            key={index.toString()}
                            style={[styles.tab, isActive && styles.activeTab]}
                            onPress={() => onSelectCategory(item)}
                        >
                            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

