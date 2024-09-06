"use strict";

const buttonEncodeEvent = function () {
  const textDecoded = document
    .getElementById("inputDecoded")
    .value.replace(" ", "");
  const result = [];
  for (let i = 0; i < textDecoded.length; ++i) {
    const nextChar = encodeTable[textDecoded.charAt(i)];
    if (nextChar) {
      result.push(nextChar);
    } else {
      console.warn("encode error, abort.");
      break;
    }
  }
  document.getElementById("inputEncoded").value = result.join(" ");
};

const buttonDecodeEvent = function () {
  const textEncoded = document
    .getElementById("inputEncoded")
    .value.replace(/\s+/g, "");
  const result = [];
  for (let i = 0; i < textEncoded.length - 1; i += 2) {
    const nextChar =
      decodeTable[textEncoded.charAt(i) + textEncoded.charAt(i + 1)];
    if (nextChar) {
      result.push(nextChar);
    } else {
      console.warn("decode error, abort.");
      break;
    }
  }
  document.getElementById("inputDecoded").value = result.join("");
};

const buttonEncode = document.getElementById("buttonEncode");
buttonEncode.addEventListener(
  "click",
  (e) => {
    buttonEncodeEvent();
  },
  false
);
const buttonDecode = document.getElementById("buttonDecode");
buttonDecode.addEventListener(
  "click",
  (e) => {
    buttonDecodeEvent();
  },
  false
);

const encodeTable = {
  _: "00",
  "＿": "00",
  "　": "00",
  あ: "01",
  い: "02",
  う: "03",
  え: "04",
  お: "05",
  か: "06",
  き: "07",
  く: "08",
  け: "09",
  こ: "0A",
  さ: "0B",
  し: "0C",
  す: "0D",
  せ: "0E",
  そ: "0F",
  た: "10",
  ち: "11",
  つ: "12",
  て: "13",
  と: "14",
  な: "15",
  に: "16",
  ぬ: "17",
  ね: "18",
  の: "19",
  は: "1A",
  ひ: "1B",
  ふ: "1C",
  へ: "1D",
  ほ: "1E",
  ま: "1F",
  み: "20",
  む: "21",
  め: "22",
  も: "23",
  や: "24",
  ゆ: "25",
  よ: "26",
  ら: "27",
  り: "28",
  る: "29",
  れ: "2A",
  ろ: "2B",
  わ: "2C",
  を: "2D",
  ん: "2E",
  ぁ: "2F",
  ぃ: "30",
  ぅ: "31",
  ぇ: "32",
  ぉ: "33",
  ゃ: "34",
  ゅ: "35",
  ょ: "36",
  が: "37",
  ぎ: "38",
  ぐ: "39",
  げ: "3A",
  ご: "3B",
  ざ: "3C",
  じ: "3D",
  ず: "3E",
  ぜ: "3F",
  ぞ: "40",
  だ: "41",
  ぢ: "42",
  づ: "43",
  で: "44",
  ど: "45",
  ば: "46",
  び: "47",
  ぶ: "48",
  べ: "49",
  ぼ: "4A",
  ぱ: "4B",
  ぴ: "4C",
  ぷ: "4D",
  ぺ: "4E",
  ぽ: "4F",
  っ: "50",
  ア: "51",
  イ: "52",
  ウ: "53",
  エ: "54",
  オ: "55",
  カ: "56",
  キ: "57",
  ク: "58",
  ケ: "59",
  コ: "5A",
  サ: "5B",
  シ: "5C",
  ス: "5D",
  セ: "5E",
  ソ: "5F",
  タ: "60",
  チ: "61",
  ツ: "62",
  テ: "63",
  ト: "64",
  ナ: "65",
  ニ: "66",
  ヌ: "67",
  ネ: "68",
  ノ: "69",
  ハ: "6A",
  ヒ: "6B",
  フ: "6C",
  ヘ: "6D",
  ホ: "6E",
  マ: "6F",
  ミ: "70",
  ム: "71",
  メ: "72",
  モ: "73",
  ヤ: "74",
  ユ: "75",
  ヨ: "76",
  ラ: "77",
  リ: "78",
  ル: "79",
  レ: "7A",
  ロ: "7B",
  ワ: "7C",
  ヲ: "7D",
  ン: "7E",
  ァ: "7F",
  ィ: "80",
  ゥ: "81",
  ェ: "82",
  ォ: "83",
  ャ: "84",
  ュ: "85",
  ョ: "86",
  ガ: "87",
  ギ: "88",
  グ: "89",
  ゲ: "8A",
  ゴ: "8B",
  ザ: "8C",
  ジ: "8D",
  ズ: "8E",
  ゼ: "8F",
  ゾ: "90",
  ダ: "91",
  ヂ: "92",
  ヅ: "93",
  デ: "94",
  ド: "95",
  バ: "96",
  ビ: "97",
  ブ: "98",
  ベ: "99",
  ボ: "9A",
  パ: "9B",
  ピ: "9C",
  プ: "9D",
  ペ: "9E",
  ポ: "9F",
  ッ: "A0",
  "０": "A1",
  "１": "A2",
  "２": "A3",
  "３": "A4",
  "４": "A5",
  "５": "A6",
  "６": "A7",
  "７": "A8",
  "８": "A9",
  "９": "AA",
  "！": "AB",
  "？": "AC",
  "。": "AD",
  "－": "AE",
  "・": "AF",
  "…": "B0",
  "『": "B1",
  "』": "B2",
  "「": "B3",
  "」": "B4",
  "♂": "B5",
  "♀": "B6",
  円: "B7",
  "．": "B8",
  "×": "B9",
  "／": "BA",
  Ａ: "BB",
  Ｂ: "BC",
  Ｃ: "BD",
  Ｄ: "BE",
  Ｅ: "BF",
  Ｆ: "C0",
  Ｇ: "C1",
  Ｈ: "C2",
  Ｉ: "C3",
  Ｊ: "C4",
  Ｋ: "C5",
  Ｌ: "C6",
  Ｍ: "C7",
  Ｎ: "C8",
  Ｏ: "C9",
  Ｐ: "CA",
  Ｑ: "CB",
  Ｒ: "CC",
  Ｓ: "CD",
  Ｔ: "CE",
  Ｕ: "CF",
  Ｖ: "D0",
  Ｗ: "D1",
  Ｘ: "D2",
  Ｙ: "D3",
  Ｚ: "D4",
  ａ: "D5",
  ｂ: "D6",
  ｃ: "D7",
  ｄ: "D8",
  ｅ: "D9",
  ｆ: "DA",
  ｇ: "DB",
  ｈ: "DC",
  ｉ: "DD",
  ｊ: "DE",
  ｋ: "DF",
  ｌ: "E0",
  ｍ: "E1",
  ｎ: "E2",
  ｏ: "E3",
  ｐ: "E4",
  ｑ: "E5",
  ｒ: "E6",
  ｓ: "E7",
  ｔ: "E8",
  ｕ: "E9",
  ｖ: "EA",
  ｗ: "EB",
  ｘ: "EC",
  ｙ: "ED",
  ｚ: "EE",
  "(選択カーソル)": "EF",
  "：": "F0",
  Ä: "F1",
  Ö: "F2",
  Ü: "F3",
  ä: "F4",
  ö: "F5",
  ü: "F6",
  "@": "XX",
};

const decodeTable = {
  "00": "＿",
  "01": "あ",
  "02": "い",
  "03": "う",
  "04": "え",
  "05": "お",
  "06": "か",
  "07": "き",
  "08": "く",
  "09": "け",
  "0A": "こ",
  "0B": "さ",
  "0C": "し",
  "0D": "す",
  "0E": "せ",
  "0F": "そ",
  10: "た",
  11: "ち",
  12: "つ",
  13: "て",
  14: "と",
  15: "な",
  16: "に",
  17: "ぬ",
  18: "ね",
  19: "の",
  "1A": "は",
  "1B": "ひ",
  "1C": "ふ",
  "1D": "へ",
  "1E": "ほ",
  "1F": "ま",
  20: "み",
  21: "む",
  22: "め",
  23: "も",
  24: "や",
  25: "ゆ",
  26: "よ",
  27: "ら",
  28: "り",
  29: "る",
  "2A": "れ",
  "2B": "ろ",
  "2C": "わ",
  "2D": "を",
  "2E": "ん",
  "2F": "ぁ",
  30: "ぃ",
  31: "ぅ",
  32: "ぇ",
  33: "ぉ",
  34: "ゃ",
  35: "ゅ",
  36: "ょ",
  37: "が",
  38: "ぎ",
  39: "ぐ",
  "3A": "げ",
  "3B": "ご",
  "3C": "ざ",
  "3D": "じ",
  "3E": "ず",
  "3F": "ぜ",
  40: "ぞ",
  41: "だ",
  42: "ぢ",
  43: "づ",
  44: "で",
  45: "ど",
  46: "ば",
  47: "び",
  48: "ぶ",
  49: "べ",
  "4A": "ぼ",
  "4B": "ぱ",
  "4C": "ぴ",
  "4D": "ぷ",
  "4E": "ぺ",
  "4F": "ぽ",
  50: "っ",
  51: "ア",
  52: "イ",
  53: "ウ",
  54: "エ",
  55: "オ",
  56: "カ",
  57: "キ",
  58: "ク",
  59: "ケ",
  "5A": "コ",
  "5B": "サ",
  "5C": "シ",
  "5D": "ス",
  "5E": "セ",
  "5F": "ソ",
  60: "タ",
  61: "チ",
  62: "ツ",
  63: "テ",
  64: "ト",
  65: "ナ",
  66: "ニ",
  67: "ヌ",
  68: "ネ",
  69: "ノ",
  "6A": "ハ",
  "6B": "ヒ",
  "6C": "フ",
  "6D": "ヘ",
  "6E": "ホ",
  "6F": "マ",
  70: "ミ",
  71: "ム",
  72: "メ",
  73: "モ",
  74: "ヤ",
  75: "ユ",
  76: "ヨ",
  77: "ラ",
  78: "リ",
  79: "ル",
  "7A": "レ",
  "7B": "ロ",
  "7C": "ワ",
  "7D": "ヲ",
  "7E": "ン",
  "7F": "ァ",
  80: "ィ",
  81: "ゥ",
  82: "ェ",
  83: "ォ",
  84: "ャ",
  85: "ュ",
  86: "ョ",
  87: "ガ",
  88: "ギ",
  89: "グ",
  "8A": "ゲ",
  "8B": "ゴ",
  "8C": "ザ",
  "8D": "ジ",
  "8E": "ズ",
  "8F": "ゼ",
  90: "ゾ",
  91: "ダ",
  92: "ヂ",
  93: "ヅ",
  94: "デ",
  95: "ド",
  96: "バ",
  97: "ビ",
  98: "ブ",
  99: "ベ",
  "9A": "ボ",
  "9B": "パ",
  "9C": "ピ",
  "9D": "プ",
  "9E": "ペ",
  "9F": "ポ",
  A0: "ッ",
  A1: "０",
  A2: "１",
  A3: "２",
  A4: "３",
  A5: "４",
  A6: "５",
  A7: "６",
  A8: "７",
  A9: "８",
  AA: "９",
  AB: "！",
  AC: "？",
  AD: "。",
  AE: "－",
  AF: "・",
  B0: "…",
  B1: "『",
  B2: "』",
  B3: "「",
  B4: "」",
  B5: "♂",
  B6: "♀",
  B7: "円",
  B8: "．",
  B9: "×",
  BA: "／",
  BB: "Ａ",
  BC: "Ｂ",
  BD: "Ｃ",
  BE: "Ｄ",
  BF: "Ｅ",
  C0: "Ｆ",
  C1: "Ｇ",
  C2: "Ｈ",
  C3: "Ｉ",
  C4: "Ｊ",
  C5: "Ｋ",
  C6: "Ｌ",
  C7: "Ｍ",
  C8: "Ｎ",
  C9: "Ｏ",
  CA: "Ｐ",
  CB: "Ｑ",
  CC: "Ｒ",
  CD: "Ｓ",
  CE: "Ｔ",
  CF: "Ｕ",
  D0: "Ｖ",
  D1: "Ｗ",
  D2: "Ｘ",
  D3: "Ｙ",
  D4: "Ｚ",
  D5: "ａ",
  D6: "ｂ",
  D7: "ｃ",
  D8: "ｄ",
  D9: "ｅ",
  DA: "ｆ",
  DB: "ｇ",
  DC: "ｈ",
  DD: "ｉ",
  DE: "ｊ",
  DF: "ｋ",
  E0: "ｌ",
  E1: "ｍ",
  E2: "ｎ",
  E3: "ｏ",
  E4: "ｐ",
  E5: "ｑ",
  E6: "ｒ",
  E7: "ｓ",
  E8: "ｔ",
  E9: "ｕ",
  EA: "ｖ",
  EB: "ｗ",
  EC: "ｘ",
  ED: "ｙ",
  EE: "ｚ",
  EF: "(選択カーソル)",
  F0: "：",
  F1: "Ä",
  F2: "Ö",
  F3: "Ü",
  F4: "ä",
  F5: "ö",
  F6: "ü",
};
