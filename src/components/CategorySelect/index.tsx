import React from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category"
import { categories } from "../../utils/categories";
import { styles } from './styles';

type Props = {
    CategorySelect: string,
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({CategorySelect, setCategory}: Props) {
    return (
        <ScrollView 
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === CategorySelect}
                        onPress={()=> setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    );
}