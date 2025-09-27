# Purpose
Design a flash-card application for Japanese language learning.

# Features
1. **Flash Card Display**:
   - When the page loads, a flash card is displayed in the center of the screen.
   - Each card has two sides (e.g., Japanese word on one side, English meaning on the other).
   - One side is shown randomly when the page loads.
   - Clicking the card flips it to reveal the other side with a 2D horizontal flipping animation.

2. **Title**:
   - A title is displayed at the top of the page: "Japanese Flash Card".
   - The title is shown in both English and Japanese: 日本語フラッシュカード.

3. **Navigation Buttons**:
   - Two buttons are placed on either side of the flash card:
     - **Right Button**: Kanji: 次へ, Hiragana: つぎへ
     - **Left Button**: Kanji: 前へ, Hiragana: まえへ
   - These buttons allow navigation through the vocabulary list.

4. **Vocabulary Management**:
   - Vocabulary data is sourced from the `vocabulary.js` file.
   - On page load, the vocabulary list is shuffled to ensure random order.
   - The "Previous" and "Next" buttons respect the shuffled sequence.

5. **Styling**:
   - **Background**: Black.
   - **Text**: White.
   - **Flash Card**: Dark gray.
     - On hover, the card becomes slightly lighter gray while keeping the text clear.

# Vocabulary.js
- In this version, users cannot add new vocabulary.
- The vocabulary data is structured in JSON format. Example:
  ```javascript
  const vocabulary = [
    {
      kanji: "水",
      kana_hira: "みず",
      english: "water"
    },
    {
      kanji: "火",
      kana_hira: "ひ",
      english: "fire"
    }
  ];
  ```