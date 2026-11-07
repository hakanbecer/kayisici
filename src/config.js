export const CONFIG = {
  DEV_MODE: true,
  APP_VERSION: '1.0.0',

  WORLD: {
    SIZE: 58.0,
    BOUNDS: {
      MIN_X: -25.0,
      MAX_X: 26.5,
      MIN_Z: -14.0,
      MAX_Z: 14.0
    },
    TILE_SIZE: 2.0,
    BORDER_HEIGHT: 0.5,
    BORDER_THICKNESS: 0.4
  },

  CAMERA: {
    FRUSTUM_SIZE: 20.0,
    NEAR: -100.0,
    FAR: 200.0,
    ANGLE_Y: Math.PI / 4,
    ANGLE_X: Math.atan(1 / Math.SQRT2),
    DISTANCE: 45.0,
    FOLLOW_LERP: 0.08
  },

  LIGHT: {
    AMBIENT_INTENSITY: 0.78,
    AMBIENT_COLOR: 0xffffff,
    DIRECTIONAL_INTENSITY: 1.25,
    DIRECTIONAL_COLOR: 0xfffaea,
    DIRECTIONAL_POS: { x: 25.0, y: 40.0, z: 20.0 }
  },

  ECONOMY: {
    CRATE_PRICE: 60,
    MERCHANT_INTERVAL: 60.0,
    SALES_BUFFER_CAPACITY: 12
  },

  ITEMS: {
    APRICOT: 'apricot',
    CRATE_FRESH: 'crate_fresh',
    CRATE_DRY1: 'crate_dry1',
    CRATE_SULFUR: 'crate_sulfur',
    CRATE_DRY2: 'crate_dry2'
  },

  CHAIN: [
    { from: 'apricot', to: 'crate_fresh', stationId: 'station_crate' },
    { from: 'crate_fresh', to: 'crate_dry1', stationId: 'station_drying1' },
    { from: 'crate_dry1', to: 'crate_sulfur', stationId: 'station_tent' },
    { from: 'crate_sulfur', to: 'crate_dry2', stationId: 'station_drying2' }
  ],

  CAPACITIES: {
    apricot: 10,
    crate_fresh: 3,
    crate_dry1: 3,
    crate_sulfur: 3,
    crate_dry2: 3
  },

  ITEM_LABELS: {
    EMPTY: { label: 'BOŞ', icon: '🖐️' },
    apricot: { label: 'KAYISI', icon: '🍑' },
    crate_fresh: { label: 'TAZE KASA', icon: '📦' },
    crate_dry1: { label: '1. KURU KASA', icon: '🪵' },
    crate_sulfur: { label: 'KÜKÜRT KASA', icon: '✨' },
    crate_dry2: { label: '2. KURU KASA', icon: '🏆' }
  },

  PLAYER: {
    SPEED: 6.2,
    ROTATION_LERP: 0.22,
    RADIUS: 0.45,
    HEIGHT: 1.6,
    HEAD_RADIUS: 0.28,
    HEAD_HEIGHT: 1.35,
    BODY_HEIGHT: 0.85,
    BODY_RADIUS_TOP: 0.32,
    BODY_RADIUS_BOTTOM: 0.38,
    BODY_Y: 0.65,
    FEET_WIDTH: 0.16,
    FEET_HEIGHT: 0.15,
    FEET_DEPTH: 0.24,
    FEET_SPACING: 0.18,
    FEET_Y: 0.075,
    HAT_RADIUS: 0.34,
    HAT_HEIGHT: 0.12,
    HAT_TOP_RADIUS: 0.2,
    HAT_TOP_HEIGHT: 0.15,
    HAT_Y: 1.55,
    BASKET_WIDTH: 0.56,
    BASKET_HEIGHT: 0.55,
    BASKET_DEPTH: 0.42,
    BASKET_Y: 0.65,
    BASKET_Z: -0.32,
    STACK: {
      OFFSET_Y: 0.80,
      OFFSET_Z: -0.32,
      COLS: 2,
      ROWS: 2,
      SPACING_X: 0.20,
      SPACING_Y: 0.18,
      SPACING_Z: 0.20,
      SCALE: 0.75
    },
    CRATE_STACK: {
      OFFSET_Y: 0.35,
      OFFSET_Z: -0.42,
      SPACING_Y: 0.36,
      SCALE: 0.68
    }
  },

  TREES: {
    COUNT: 4,
    POSITIONS: [
      { x: -20.0, z: -4.5 },
      { x: -16.0, z: -4.5 },
      { x: -20.0, z: 4.5 },
      { x: -16.0, z: 4.5 }
    ],
    TRUNK_HEIGHT: 1.7,
    TRUNK_RADIUS_TOP: 0.28,
    TRUNK_RADIUS_BOTTOM: 0.42,
    TRUNK_SEGMENTS: 7,
    CROWN_TIERS: [
      { y: 1.6, radius: 1.5, height: 1.25, segments: 7 },
      { y: 2.45, radius: 1.15, height: 1.1, segments: 7 }
    ],
    FRUITS_PER_TREE: 5,
    FRUIT_OFFSETS: [
      { x: 0.95, y: 1.9, z: 0.35 },
      { x: -0.85, y: 2.1, z: 0.55 },
      { x: 0.45, y: 2.4, z: -0.8 },
      { x: -0.7, y: 1.9, z: -0.65 },
      { x: 0.1, y: 2.6, z: 0.75 }
    ]
  },

  APRICOT: {
    RADIUS: 0.14,
    WIDTH_SEGMENTS: 7,
    HEIGHT_SEGMENTS: 6,
    STEM_RADIUS: 0.02,
    STEM_HEIGHT: 0.06,
    LEAF_WIDTH: 0.08,
    LEAF_HEIGHT: 0.015,
    LEAF_DEPTH: 0.05
  },

  PROPS: {
    CRATE: {
      WIDTH: 0.68,
      HEIGHT: 0.34,
      DEPTH: 0.52,
      WALL_THICKNESS: 0.05
    },
    CRATE_STATION: {
      POS: { x: -9.0, z: 0.0 },
      TABLE_WIDTH: 2.4,
      TABLE_HEIGHT: 0.85,
      TABLE_DEPTH: 1.4,
      FUNNEL_HEIGHT: 0.7,
      INPUT_ZONE: { x: -11.2, z: 0.0, radius: 1.2 },
      OUTPUT_ZONE: { x: -6.8, z: 0.0, radius: 1.2 },
      SLOT_POSITIONS: [
        { x: -8.8, y: 0.85, z: 0.0 }
      ],
      PANEL_POS: { x: -9.0, y: 2.4, z: 0.0 }
    },
    DRYING_RACK_1: {
      POS: { x: -1.0, z: 0.0 },
      WIDTH: 2.8,
      HEIGHT: 1.1,
      DEPTH: 1.8,
      LEG_RADIUS: 0.06,
      SHELF_THICKNESS: 0.05,
      INPUT_ZONE: { x: -3.2, z: 0.0, radius: 1.2 },
      OUTPUT_ZONE: { x: 1.2, z: 0.0, radius: 1.2 },
      SLOT_POSITIONS: [
        { x: -1.7, y: 0.95, z: -0.5 },
        { x: -0.3, y: 0.95, z: -0.5 },
        { x: -1.7, y: 0.95, z: 0.5 },
        { x: -0.3, y: 0.95, z: 0.5 }
      ],
      PANEL_POS: { x: -1.0, y: 2.4, z: 0.0 }
    },
    SULFUR_TENT: {
      POS: { x: 7.5, z: 0.0 },
      WIDTH: 2.6,
      HEIGHT: 2.2,
      DEPTH: 2.2,
      INPUT_ZONE: { x: 5.3, z: 0.0, radius: 1.2 },
      OUTPUT_ZONE: { x: 9.7, z: 0.0, radius: 1.2 },
      SLOT_POSITIONS: [
        { x: 7.1, y: 0.25, z: -0.4 },
        { x: 7.1, y: 0.25, z: 0.4 }
      ],
      SMOKE_ORIGIN: { x: 6.4, y: 1.8, z: 0.0 },
      PANEL_POS: { x: 7.5, y: 3.1, z: 0.0 }
    },
    DRYING_RACK_2: {
      POS: { x: 15.5, z: 0.0 },
      WIDTH: 2.8,
      HEIGHT: 1.1,
      DEPTH: 1.8,
      LEG_RADIUS: 0.06,
      SHELF_THICKNESS: 0.05,
      INPUT_ZONE: { x: 13.3, z: 0.0, radius: 1.2 },
      OUTPUT_ZONE: { x: 17.7, z: 0.0, radius: 1.2 },
      SLOT_POSITIONS: [
        { x: 14.8, y: 0.95, z: -0.5 },
        { x: 16.2, y: 0.95, z: -0.5 },
        { x: 14.8, y: 0.95, z: 0.5 },
        { x: 16.2, y: 0.95, z: 0.5 }
      ],
      PANEL_POS: { x: 15.5, y: 2.4, z: 0.0 }
    },
    SALES_STAND: {
      POS: { x: 20.8, z: 0.0 },
      PALLET_WIDTH: 2.2,
      PALLET_HEIGHT: 0.16,
      PALLET_DEPTH: 1.8,
      INPUT_ZONE: { x: 19.5, z: 0.0, radius: 1.2 },
      PANEL_POS: { x: 20.8, y: 2.5, z: 0.0 }
    },
    ROAD: {
      X: 23.8,
      WIDTH: 3.2,
      LENGTH: 54.0,
      COLOR: 0x576574,
      LINE_COLOR: 0xf1f2f6
    },
    MERCHANT_TRUCK: {
      SPEED: 10.0,
      ROAD_X: 23.8,
      START_Z: -26.0,
      STOP_Z: 0.0,
      END_Z: 26.0,
      EMPTY_WAIT: 1.5,
      CRATE_FLY_DURATION: 0.4,
      DEPART_DELAY: 0.5
    }
  },

  STATIONS: {
    ITEM_TRANSFER_INTERVAL: 0.08,
    FLOATING_ICON_Y: 2.5,
    SMOKE_POOL_SIZE: 10,
    CRATE_STATION: {
      ID: 'station_crate',
      NAME: 'Kasa İstasyonu',
      INPUT_TYPE: 'apricot',
      OUTPUT_TYPE: 'crate_fresh',
      INPUT_PER_BATCH: 10,
      PROCESS_TIME: 2.0,
      SLOT_COUNT: 1,
      INPUT_BUFFER_CAPACITY: 30,
      OUTPUT_LIMIT: 2
    },
    DRYING_RACK_1: {
      ID: 'station_drying1',
      NAME: '1. Güneş Kurutma Rafı',
      INPUT_TYPE: 'crate_fresh',
      OUTPUT_TYPE: 'crate_dry1',
      INPUT_PER_BATCH: 1,
      PROCESS_TIME: 20.0,
      SLOT_COUNT: 4,
      INPUT_BUFFER_CAPACITY: 6,
      OUTPUT_LIMIT: 4
    },
    SULFUR_TENT: {
      ID: 'station_tent',
      NAME: 'Kükürt Çadırı',
      INPUT_TYPE: 'crate_dry1',
      OUTPUT_TYPE: 'crate_sulfur',
      INPUT_PER_BATCH: 1,
      PROCESS_TIME: 25.0,
      SLOT_COUNT: 2,
      INPUT_BUFFER_CAPACITY: 4,
      OUTPUT_LIMIT: 2,
      HAS_SMOKE: true
    },
    DRYING_RACK_2: {
      ID: 'station_drying2',
      NAME: '2. Güneş Kurutma Rafı',
      INPUT_TYPE: 'crate_sulfur',
      OUTPUT_TYPE: 'crate_dry2',
      INPUT_PER_BATCH: 1,
      PROCESS_TIME: 20.0,
      SLOT_COUNT: 4,
      INPUT_BUFFER_CAPACITY: 6,
      OUTPUT_LIMIT: 4
    }
  },

  HARVEST: {
    TRIGGER_DISTANCE: 2.6,
    STAND_STILL_TIME: 1.5,
    MOVEMENT_THRESHOLD: 0.12,
    SHAKE_DURATION: 0.65,
    SHAKE_FREQUENCY: 32.0,
    SHAKE_INTENSITY: 0.14,
    RESPAWN_COOLDOWN: 15.0,
    DROP_FLIGHT_DURATION: 0.5,
    DROP_ARC_HEIGHT: 1.6
  },

  JOYSTICK: {
    MAX_RADIUS: 46.0,
    DEADZONE: 0.08,
    DEFAULT_POS: { x: 80.0, y: 80.0 }
  },

  COLORS: {
    BACKGROUND: 0x72b254,
    GROUND_LIGHT: 0x7ebf5e,
    GROUND_DARK: 0x73b453,
    BORDER: 0x5a9142,
    TREE_TRUNK: 0x684526,
    TREE_FOLIAGE_BOTTOM: 0x489b33,
    TREE_FOLIAGE_TOP: 0x58b340,
    APRICOT: 0xffa502,
    APRICOT_DRY1: 0x8b3a0f,
    APRICOT_SULFUR: 0xfed330,
    APRICOT_DRY2: 0x4a2505,
    APRICOT_LEAF: 0x3c9920,
    PLAYER_SHIRT: 0x227093,
    PLAYER_SKIN: 0xffd3a5,
    PLAYER_HAT: 0xe58e26,
    PLAYER_FEET: 0x2c3e50,
    BASKET: 0x8c5b36,
    CRATE: 0xa87747,
    CRATE_SLAT: 0x8c5b36,
    STATION_TABLE: 0x57606f,
    STATION_METAL: 0xa4b0be,
    STATION_FUNNEL: 0xff6b81,
    RACK_FRAME: 0x596275,
    RACK_NET: 0xd2b48c,
    TENT_ROOF: 0xced6e0,
    TENT_TRIM: 0xe74c3c,
    TENT_ENTRANCE: 0x2f3542,
    SMOKE: 0xfefae0,
    ZONE_INPUT: 0x00d2d3,
    ZONE_OUTPUT: 0xfeca57,
    ROAD: 0x576574,
    ROAD_LINE: 0xf1f2f6,
    TRUCK_CABIN: 0xeb4d4b,
    TRUCK_ROOF: 0xff7979,
    TRUCK_BED: 0x535c68,
    TRUCK_WHEEL: 0x2f3542,
    TRUCK_BUMPER: 0xdfe4ea
  },

  STRINGS: {
    TITLE: "Kayısı Hasadı",
    FULL: "DOLU!",
    WARNING_EMPTY_HANDS: "Önce ellerini boşalt",
    WARNING_WRONG_CRATE: "Bu kasa buraya uymaz",
    TOAST_DISCARDED: "Atıldı",
    DISCARD_BUTTON: "🗑️ At",
    EMPTY_LABEL: "BOŞ",
    NO_GOODS: "Mal yok!",
    LOADING: "Yükleniyor...",
    UPGRADE_BUTTON: "⚡ Yükselt",
    UPGRADE_PANEL_TITLE: "Geliştirmeler",
    LEVEL_MAX: "MAX",
    LEVEL_FORMAT: "Seviye {0}/{1}",
    BUY_BUTTON: "Al",
    RESET_SAVE: "Kaydı Sıfırla",
    RESET_SAVE_CONFIRM: "Tüm oyun kaydı silinecek ve oyun baştan başlayacak. Emin misiniz?"
  },

  STORAGE: {
    KEY: 'kayisi_save',
    VERSION: 2,
    AUTO_SAVE_INTERVAL: 5.0,
    DEFAULT_SOUND: true
  },

  TUTORIAL: {
    STEPS: [
      {
        id: 'tree',
        text: 'Ağaca git ve durarak kayısı topla',
        target: { x: -20.0, y: 0.0, z: -4.5 },
        completeEvent: 'apricot_collected'
      },
      {
        id: 'crate_station',
        text: 'Topladığın kayısıları Kasa İstasyonu girişine bırak',
        target: { x: -11.2, y: 0.0, z: 0.0 },
        completeEvent: 'station_started',
        stationId: 'station_crate'
      },
      {
        id: 'pick_crate',
        text: 'Kasa İstasyonu çıkışındaki taze kasayı al',
        target: { x: -6.8, y: 0.0, z: 0.0 },
        completeEvent: 'crate_picked',
        itemType: 'crate_fresh'
      },
      {
        id: 'rack_1',
        text: 'Kasayı 1. Güneş Rafı girişine bırak',
        target: { x: -3.2, y: 0.0, z: 0.0 },
        completeEvent: 'station_started',
        stationId: 'station_drying1'
      },
      {
        id: 'tent',
        text: 'Kurutulan kasayı Kükürt Çadırı girişine bırak',
        target: { x: 5.3, y: 0.0, z: 0.0 },
        completeEvent: 'station_started',
        stationId: 'station_tent'
      },
      {
        id: 'rack_2',
        text: 'Kükürtlü kasayı 2. Güneş Rafı girişine bırak',
        target: { x: 13.3, y: 0.0, z: 0.0 },
        completeEvent: 'station_started',
        stationId: 'station_drying2'
      },
      {
        id: 'sales',
        text: 'Kuru altın kayısı kasasını Satış Deposuna bırak',
        target: { x: 19.5, y: 0.0, z: 0.0 },
        completeEvent: 'dropped',
        stationId: 'sales'
      },
      {
        id: 'wait_truck',
        text: 'Tüccar kamyonunu bekle ve altınları kazan',
        target: { x: 23.8, y: 0.0, z: 0.0 },
        completeEvent: 'sold'
      },
      {
        id: 'upgrade',
        text: '⚡ Yükselt butonuna dokun ve geliştirme yap',
        target: null,
        completeEvent: 'upgrade_bought'
      }
    ],
    STRINGS: {
      SKIP_BTN: 'Geç',
      CLOSE_BTN: '✕ Kapat',
      COMPLETE_TITLE: 'Tebrikler!',
      COMPLETE_TEXT: 'Çiftlik döngüsünü öğrendin. Bol kazançlar!'
    }
  },

  AUDIO: {
    ENABLED_DEFAULT: true,
    MAX_COLLECT_RATE: 8,
    MIN_COLLECT_INTERVAL: 0.125
  },

  PARTICLES: {
    POOL_SIZE: 30,
    GRAVITY: -9.8,
    DEFAULT_LIFE: 0.85
  },

  UPGRADES: {
    TENT_CAPACITY: {
      ID: 'tentCapacity',
      NAME: 'Çadır Kapasitesi',
      ICON: '⛺',
      BASE_COST: 400,
      COST_MULTIPLIER: 1.7,
      MAX_LEVEL: 5,
      BONUS_PER_LEVEL: 1,
      DESC: '+1 Kükürt Yuvası'
    },
    WALK_SPEED: {
      ID: 'walkSpeed',
      NAME: 'Yürüme Hızı',
      ICON: '👟',
      BASE_COST: 250,
      COST_MULTIPLIER: 1.7,
      MAX_LEVEL: 5,
      MULTIPLIER_PER_LEVEL: 0.12,
      DESC: '+%12 Hız'
    },
    CARRY_CAPACITY: {
      ID: 'carryCapacity',
      NAME: 'Taşıma Kapasitesi',
      ICON: '🎒',
      BASE_COST: 300,
      COST_MULTIPLIER: 1.7,
      MAX_LEVEL: 5,
      APRICOT_BONUS_PER_LEVEL: 3,
      CRATE_BONUS_PER_LEVEL: 1,
      DESC: '+3 Kayısı, +1 Kasa'
    },
    HARVEST_SPEED: {
      ID: 'harvestSpeed',
      NAME: 'Silkeleme Hızı',
      ICON: '🌳',
      BASE_COST: 200,
      COST_MULTIPLIER: 1.7,
      MAX_LEVEL: 5,
      REDUCTION_PER_LEVEL: 0.15,
      DESC: '-%15 Silkeleme Süresi'
    }
  }
};
