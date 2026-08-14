import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: "2",
    name: "Adidas Runfalcon",
    brand: "Adidas",
    price: 2999,
    oldPrice: 4299,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
  },
  {
    id: "3",
    name: "Puma Softride",
    brand: "Puma",
    price: 4199,
    oldPrice: 5999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
  },
  {
    id: "4",
    name: "New Balance Fresh Foam",
    brand: "New Balance",
    price: 4799,
    oldPrice: 6499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600",
  },
  {
    id: "5",
    name: "Nike Air Max",
    brand: "Nike",
    price: 5499,
    oldPrice: 7999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600",
  },
  {
    id: "6",
    name: "Adidas Ultraboost",
    brand: "Adidas",
    price: 6999,
    oldPrice: 9999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600",
  },
  {
    id: "7",
    name: "Puma Future Rider",
    brand: "Puma",
    price: 3899,
    oldPrice: 5499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600",
  },
  {
    id: "8",
    name: "ASICS Gel Contend",
    brand: "ASICS",
    price: 4499,
    oldPrice: 5999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600",
  },
  {
    id: "9",
    name: "Nike Air Zoom",
    brand: "Nike",
    price: 5799,
    oldPrice: 7499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600",
  },
  {
    id: "10",
    name: "Adidas Forum Low",
    brand: "Adidas",
    price: 4599,
    oldPrice: 6299,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600",
  },
  {
    id: "11",
    name: "Puma RS-X",
    brand: "Puma",
    price: 4999,
    oldPrice: 6999,
    rating: 4.6,
    image:
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
  },
  {
  id: "12",
  name: "ASICS Gel Nimbus",
  brand: "ASICS",
  price: 6299,
  oldPrice: 8499,
  rating: 4.9,
  image:
    "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
},
  {
    id: "13",
    name: "New Balance 574",
    brand: "New Balance",
    price: 5299,
    oldPrice: 6999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600",
  },
  {
    id: "14",
    name: "Nike Court Vision",
    brand: "Nike",
    price: 3999,
    oldPrice: 5499,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
  },
  {
    id: "15",
    name: "Adidas AlphaBounce",
    brand: "Adidas",
    price: 5799,
    oldPrice: 7499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

 const query = search.toLowerCase();

const maxPriceMatch = query.match(/(?:under|below|less than|within)\s*₹?\s*(\d+)/i);

const maxPrice = maxPriceMatch
  ? Number(maxPriceMatch[1])
  : null;

const wantsRunning =
  query.includes("running") ||
  query.includes("runner") ||
  query.includes("jogging");

const wantsNike = query.includes("nike");
const wantsAdidas = query.includes("adidas");
const wantsPuma = query.includes("puma");
const wantsAsics = query.includes("asics");

const filteredShoes = shoes.filter((shoe) => {
  const matchesPrice =
    maxPrice === null || shoe.price <= maxPrice;

  const matchesBrand =
    (!wantsNike || shoe.brand === "Nike") &&
    (!wantsAdidas || shoe.brand === "Adidas") &&
    (!wantsPuma || shoe.brand === "Puma") &&
    (!wantsAsics || shoe.brand === "ASICS");

  const matchesRunning =
    !wantsRunning ||
    shoe.name.toLowerCase().includes("run") ||
    shoe.name.toLowerCase().includes("zoom") ||
    shoe.name.toLowerCase().includes("gel") ||
    shoe.name.toLowerCase().includes("boost") ||
    shoe.name.toLowerCase().includes("foam");

  const matchesNormalSearch =
    query === "" ||
    shoe.name.toLowerCase().includes(query) ||
    shoe.brand.toLowerCase().includes(query);

  return (
    matchesPrice &&
    matchesBrand &&
    matchesRunning &&
    matchesNormalSearch
  );
});
  const openProduct = (id: string) => {
    router.push(`/product?id=${id}`);
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeSmall}>✦ WELCOME TO ✦</Text>

          <Text style={styles.welcomeTitle}>SMARTSHOP</Text>

          <Text style={styles.welcomeSubtitle}>
            Your Smart AI Shopping Destination
          </Text>
        </View>

        <View style={styles.cart}>
          <Text style={styles.cartText}>🛒</Text>
        </View>
      </View>

      {/* AI BANNER */}

      <View style={styles.banner}>
        <Text style={styles.bannerSmall}>✦ AI SMART SEARCH</Text>

        <Text style={styles.bannerTitle}>
          FIND YOUR{"\n"}PERFECT SHOES
        </Text>

        <Text style={styles.bannerText}>
          Explore amazing shoes with smart recommendations made for you.
        </Text>
      </View>

      {/* SEARCH */}

      <View style={styles.search}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search shoes..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* CATEGORY */}

      <View style={styles.categoryRow}>
        <View style={styles.categoryActive}>
          <Text style={styles.categoryActiveText}>All Shoes</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>Running</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>Sports</Text>
        </View>
      </View>

      {/* TITLE */}

      <View style={styles.titleRow}>
        <View>
          <Text style={styles.title}>Popular Shoes</Text>

          <Text style={styles.subtitle}>
            Tap any shoe to view details
          </Text>
        </View>

        <Text style={styles.count}>
          {filteredShoes.length} items
        </Text>
      </View>

      {/* SHOES */}

      <View style={styles.grid}>
        {filteredShoes.map((shoe) => {
          const isFavorite = favorites.includes(shoe.id);

          return (
            <View key={shoe.id} style={styles.card}>
              
              {/* IMAGE + SALE */}

              <View style={styles.imageArea}>
                <Pressable
                  style={styles.imageButton}
                  onPress={() => openProduct(shoe.id)}
                >
                  <Image
                    source={{ uri: shoe.image }}
                    style={styles.shoeImage}
                    resizeMode="contain"
                  />
                </Pressable>

                <View style={styles.sale}>
                  <Text style={styles.saleText}>SALE</Text>
                </View>

                {/* HEART */}

                <Pressable
                  style={styles.heart}
                  onPress={() => toggleFavorite(shoe.id)}
                >
                  <Text
                    style={[
                      styles.heartText,
                      isFavorite && styles.heartSelected,
                    ]}
                  >
                    {isFavorite ? "♥" : "♡"}
                  </Text>
                </Pressable>
              </View>

              {/* INFORMATION */}

              <Pressable
                style={styles.info}
                onPress={() => openProduct(shoe.id)}
              >
                <Text style={styles.brand}>{shoe.brand}</Text>

                <Text style={styles.shoeName} numberOfLines={1}>
                  {shoe.name}
                </Text>

                <View style={styles.rating}>
                  <Text style={styles.star}>★</Text>

                  <Text style={styles.ratingText}>
                    {shoe.rating}
                  </Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.price}>
                    ₹{shoe.price.toLocaleString("en-IN")}
                  </Text>

                  <Text style={styles.oldPrice}>
                    ₹{shoe.oldPrice.toLocaleString("en-IN")}
                  </Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>

      {/* FOOTER */}

      <Text style={styles.footer}>
        SmartShop AI • Smart search. Better choices.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F7FA",
  },

  container: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  header: {
    marginTop: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  welcomeBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },

  welcomeSmall: {
    fontSize: 12,
    fontWeight: "900",
    color: "#7B61FF",
    letterSpacing: 3,
    textAlign: "center",
  },

  welcomeTitle: {
    fontSize: 38,
    fontWeight: "900",
    color: "#4F3CC9",
    letterSpacing: 2,
    marginTop: 4,
    textAlign: "center",
  },

  welcomeSubtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
    textAlign: "center",
    fontWeight: "600",
  },

  cart: {
    position: "absolute",
    right: 0,
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },

  cartText: {
    fontSize: 19,
  },

  banner: {
    marginTop: 20,
    backgroundColor: "#5B4AE8",
    borderRadius: 28,
    padding: 30,
    minHeight: 250,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },

  bannerSmall: {
    color: "#E9E6FF",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2,
    textAlign: "center",
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "900",
    marginTop: 12,
    lineHeight: 44,
    textAlign: "center",
    letterSpacing: 1,
  },

  bannerText: {
    color: "#E8E5FF",
    fontSize: 14,
    marginTop: 12,
    lineHeight: 21,
    textAlign: "center",
    maxWidth: 300,
  },

  search: {
    height: 52,
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#E6E6EA",
  },

  searchIcon: {
    fontSize: 17,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#222",
  },

  categoryRow: {
    flexDirection: "row",
    marginTop: 17,
  },

  categoryActive: {
    backgroundColor: "#5544D6",
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 25,
    marginRight: 10,
    minWidth: 100,
    alignItems: "center",
  },

  categoryActiveText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  category: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 25,
    marginRight: 10,
    minWidth: 100,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5EA",
  },

  categoryText: {
    color: "#666",
    fontSize: 13,
    fontWeight: "700",
  },

  titleRow: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  title: {
    fontSize: 20,
    color: "#222",
    fontWeight: "900",
  },

  subtitle: {
    color: "#999",
    fontSize: 10,
    marginTop: 3,
  },

  count: {
    color: "#777",
    fontSize: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 14,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 2,
  },

  imageArea: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#F1F2F5",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  imageButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  shoeImage: {
    width: "92%",
    height: "92%",
  },

  sale: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#FF5A61",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  saleText: {
    color: "#FFFFFF",
    fontSize: 7,
    fontWeight: "900",
  },

  heart: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    elevation: 4,
  },

  heartText: {
    color: "#777",
    fontSize: 20,
  },

  heartSelected: {
    color: "#FF5360",
  },

  info: {
    padding: 11,
  },

  brand: {
    color: "#999",
    fontSize: 9,
    fontWeight: "700",
  },

  shoeName: {
    color: "#222",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 3,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  star: {
    color: "#FFB000",
    fontSize: 12,
  },

  ratingText: {
    color: "#555",
    fontSize: 10,
    fontWeight: "800",
    marginLeft: 3,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  price: {
    color: "#5544D6",
    fontSize: 15,
    fontWeight: "900",
  },

  oldPrice: {
    color: "#AAA",
    fontSize: 9,
    textDecorationLine: "line-through",
    marginLeft: 5,
  },

  footer: {
    textAlign: "center",
    color: "#AAA",
    fontSize: 9,
    marginTop: 20,
  },
});