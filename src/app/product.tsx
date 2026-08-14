import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const shoes = [
  {
    id: "1",
    name: "Nike Revolution 7",
    brand: "Nike",
    price: 3499,
    oldPrice: 4999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    description:
      "A lightweight and comfortable running shoe designed for everyday training and beginner runners.",
  },
  {
    id: "2",
    name: "Adidas Runfalcon",
    brand: "Adidas",
    price: 2999,
    oldPrice: 4299,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
    description:
      "Comfortable running shoes with a supportive design for everyday walks and workouts.",
  },
  {
    id: "3",
    name: "Puma Softride",
    brand: "Puma",
    price: 4199,
    oldPrice: 5999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800",
    description:
      "Soft and comfortable footwear designed for running, walking and daily activities.",
  },
  {
    id: "4",
    name: "New Balance Fresh Foam",
    brand: "New Balance",
    price: 4799,
    oldPrice: 6499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=800",
    description:
      "Fresh Foam cushioning provides a smooth and comfortable experience for runners.",
  },
  {
    id: "5",
    name: "Nike Air Max",
    brand: "Nike",
    price: 5499,
    oldPrice: 7999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
    description:
      "Stylish Nike footwear with comfortable cushioning for everyday use.",
  },
  {
    id: "6",
    name: "Adidas Ultraboost",
    brand: "Adidas",
    price: 6999,
    oldPrice: 9999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800",
    description:
      "High-performance running shoes designed for comfort, energy return and long runs.",
  },
  {
    id: "7",
    name: "Puma Future Rider",
    brand: "Puma",
    price: 3899,
    oldPrice: 5499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800",
    description:
      "A stylish and comfortable everyday sneaker with a sporty design.",
  },
  {
    id: "8",
    name: "ASICS Gel Contend",
    brand: "ASICS",
    price: 4499,
    oldPrice: 5999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800",
    description:
      "Comfort-focused running shoes suitable for beginners and everyday runners.",
  },
  {
    id: "9",
    name: "Nike Air Zoom",
    brand: "Nike",
    price: 5799,
    oldPrice: 7499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
    description:
      "Responsive running footwear designed to provide comfort during training.",
  },
  {
    id: "10",
    name: "Adidas Forum Low",
    brand: "Adidas",
    price: 4599,
    oldPrice: 6299,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800",
    description:
      "Classic Adidas style combined with comfortable everyday wear.",
  },
  {
    id: "11",
    name: "Puma RS-X",
    brand: "Puma",
    price: 4999,
    oldPrice: 6999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800",
    description:
      "Modern sporty shoes with a bold design and comfortable sole.",
  },
  {
    id: "12",
    name: "ASICS Gel Nimbus",
    brand: "ASICS",
    price: 6299,
    oldPrice: 8499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800",
    description:
      "Premium cushioned footwear designed for comfortable long-distance running.",
  },
  {
    id: "13",
    name: "New Balance 574",
    brand: "New Balance",
    price: 5299,
    oldPrice: 6999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800",
    description:
      "A classic sneaker offering comfort and versatile everyday styling.",
  },
  {
    id: "14",
    name: "Nike Court Vision",
    brand: "Nike",
    price: 3999,
    oldPrice: 5499,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
    description:
      "Classic Nike-inspired design suitable for casual everyday wear.",
  },
  {
    id: "15",
    name: "Adidas AlphaBounce",
    brand: "Adidas",
    price: 5799,
    oldPrice: 7499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800",
    description:
      "Comfortable footwear with responsive cushioning for active lifestyles.",
  },
];

export default function ProductScreen() {
  const router = useRouter();

  const { id } = useLocalSearchParams();

  const shoe = shoes.find((item) => item.id === String(id));

  if (!shoe) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorTitle}>Shoe not found</Text>

        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* BACK BUTTON */}

      <Pressable
        style={styles.back}
        onPress={() => router.back()}
      >
        <Text style={styles.backIcon}>‹</Text>
        <Text style={styles.backLabel}>Back</Text>
      </Pressable>

      {/* PRODUCT IMAGE */}

      <View style={styles.imageBox}>
        <Image
          source={{ uri: shoe.image }}
          style={styles.productImage}
          resizeMode="contain"
        />

        <View style={styles.sale}>
          <Text style={styles.saleText}>SALE</Text>
        </View>
      </View>

      {/* PRODUCT INFORMATION */}

      <View style={styles.details}>
        <Text style={styles.brand}>{shoe.brand}</Text>

        <Text style={styles.name}>{shoe.name}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.star}>★</Text>

          <Text style={styles.rating}>
            {shoe.rating}
          </Text>

          <Text style={styles.reviews}>
            128 reviews
          </Text>
        </View>

        {/* PRICE */}

        <View style={styles.priceRow}>
          <Text style={styles.price}>
            ₹{shoe.price.toLocaleString("en-IN")}
          </Text>

          <Text style={styles.oldPrice}>
            ₹{shoe.oldPrice.toLocaleString("en-IN")}
          </Text>

          <View style={styles.discount}>
            <Text style={styles.discountText}>
              SALE
            </Text>
          </View>
        </View>

        {/* DESCRIPTION */}

        <Text style={styles.sectionTitle}>
          About this shoe
        </Text>

        <Text style={styles.description}>
          {shoe.description}
        </Text>

        {/* SIZE */}

        <Text style={styles.sectionTitle}>
          Select Size
        </Text>

        <View style={styles.sizes}>
          {["6", "7", "8", "9", "10", "11"].map(
            (size) => (
              <View key={size} style={styles.sizeBox}>
                <Text style={styles.sizeText}>
                  {size}
                </Text>
              </View>
            )
          )}
        </View>

        {/* FEATURES */}

        <Text style={styles.sectionTitle}>
          Key Features
        </Text>

        <View style={styles.feature}>
          <Text style={styles.check}>✓</Text>
          <Text style={styles.featureText}>
            Comfortable everyday design
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.check}>✓</Text>
          <Text style={styles.featureText}>
            Lightweight construction
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.check}>✓</Text>
          <Text style={styles.featureText}>
            Suitable for active lifestyles
          </Text>
        </View>

        {/* AI RECOMMENDATION */}

        <View style={styles.aiBox}>
          <Text style={styles.aiTitle}>
            ✨ AI Recommendation
          </Text>

          <Text style={styles.aiText}>
            This shoe is a great match for users
            looking for comfortable and highly
            rated footwear.
          </Text>
        </View>

        {/* BUTTONS */}

        <View style={styles.buttons}>
          <Pressable style={styles.cartButton}>
            <Text style={styles.cartButtonText}>
              🛒 Add to Cart
            </Text>
          </Pressable>

          <Pressable style={styles.buyButton}>
            <Text style={styles.buyButtonText}>
              Buy Now
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F7FA",
  },

  container: {
    padding: 16,
    paddingBottom: 40,
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 35,
    marginBottom: 15,
  },

  backIcon: {
    fontSize: 32,
    color: "#5544D6",
    marginRight: 5,
  },

  backLabel: {
    fontSize: 15,
    fontWeight: "800",
    color: "#333",
  },

  imageBox: {
    width: "100%",
    height: 320,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    elevation: 3,
  },

  productImage: {
    width: "90%",
    height: "90%",
  },

  sale: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#FF5A61",
    borderRadius: 7,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  saleText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
  },

  details: {
    backgroundColor: "#FFFFFF",
    marginTop: 15,
    borderRadius: 22,
    padding: 20,
  },

  brand: {
    color: "#7B61FF",
    fontSize: 13,
    fontWeight: "800",
  },

  name: {
    fontSize: 27,
    fontWeight: "900",
    color: "#222",
    marginTop: 5,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  star: {
    color: "#FFB000",
    fontSize: 18,
  },

  rating: {
    color: "#333",
    fontWeight: "800",
    marginLeft: 5,
  },

  reviews: {
    color: "#999",
    fontSize: 12,
    marginLeft: 8,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  price: {
    color: "#5544D6",
    fontSize: 27,
    fontWeight: "900",
  },

  oldPrice: {
    color: "#AAA",
    fontSize: 13,
    textDecorationLine: "line-through",
    marginLeft: 10,
  },

  discount: {
    backgroundColor: "#E9E6FF",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
    marginLeft: 10,
  },

  discountText: {
    color: "#5544D6",
    fontSize: 9,
    fontWeight: "900",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#222",
    marginTop: 22,
    marginBottom: 9,
  },

  description: {
    color: "#666",
    fontSize: 13,
    lineHeight: 21,
  },

  sizes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },

  sizeBox: {
    width: 48,
    height: 43,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
  },

  sizeText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#333",
  },

  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  check: {
    color: "#5544D6",
    fontSize: 17,
    fontWeight: "900",
    marginRight: 9,
  },

  featureText: {
    color: "#555",
    fontSize: 13,
  },

  aiBox: {
    backgroundColor: "#F0EDFF",
    borderRadius: 16,
    padding: 15,
    marginTop: 22,
  },

  aiTitle: {
    color: "#5544D6",
    fontSize: 15,
    fontWeight: "900",
  },

  aiText: {
    color: "#666",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 5,
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 22,
  },

  cartButton: {
    flex: 1,
    backgroundColor: "#F0EDFF",
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
  },

  cartButtonText: {
    color: "#5544D6",
    fontWeight: "900",
    fontSize: 12,
  },

  buyButton: {
    flex: 1,
    backgroundColor: "#5544D6",
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
  },

  buyButtonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 13,
  },

  error: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F7FA",
  },

  errorTitle: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 15,
  },

  backButton: {
    backgroundColor: "#5544D6",
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 12,
  },

  backText: {
    color: "#FFFFFF",
    fontWeight: "800",
  },
});