import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  MdBuild,
  MdCategory,
  MdChair,
  MdCheckroom,
  MdDevices,
  MdFitnessCenter,
  MdMenuBook,
  MdRestaurant,
  MdSpa,
} from "react-icons/md";

const CATEGORIES = [
  {
    name: "All Categories",
    icon: MdCategory,
    count: null,
  },
  {
    name: "Electronics & Audio",
    icon: MdDevices,
    count: "8.5k",
  },
  {
    name: "Fashion & Apparel",
    icon: MdCheckroom,
    count: "12.5k",
  },
  {
    name: "Home & Living",
    icon: MdChair,
    count: "15.2k",
  },
  {
    name: "Beauty & Wellness",
    icon: MdSpa,
    count: "6.2k",
  },
  {
    name: "Sports & Outdoors",
    icon: MdFitnessCenter,
    count: "4.9k",
  },
  {
    name: "Gourmet & Groceries",
    icon: MdRestaurant,
    count: "3.1k",
  },
  {
    name: "Books & Stationery",
    icon: MdMenuBook,
    count: "2.4k",
  },
  {
    name: "Automotive & Tools",
    icon: MdBuild,
    count: "1.8k",
  },
];
function CategoryDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  return (
    <Box>
      <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Menu.Trigger asChild>
          <Button bg="transparent" color="#000" outline="none" size="sm">
            {selectedCategory}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {CATEGORIES.map((category) => (
                <Menu.Item
                  key={category.name}
                  value={category.name}
                  onSelect={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
}

export default CategoryDropdown;
