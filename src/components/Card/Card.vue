<script setup lang="ts">
import { defineProps } from "vue";
import type { Product } from "../../types/Product";

const props = defineProps<{ info: Product }>();
import styles from "./Card.module.less";
</script>

<template>
    <div :class="styles.card">
        <div
            :class="styles.card__image"
            :style="{ backgroundImage: `url(${info.image})` }"
        >
            <div :class="styles.card__base">
                <div :class="styles.card__content">
                    <h2>{{ info.title }}</h2>
                    <p><strong>Category:</strong> {{ info.category }}</p>
                    <p><strong>Price:</strong> ${{ info.price }}</p>
                    <p>
                        <strong>Rating:</strong> {{ info.rating.rate }} ({{
                            info.rating.count
                        }}
                        reviews)
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
