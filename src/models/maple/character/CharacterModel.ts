/**
 *  메이플_캐릭터 Models
 */

// OCID 조회
export interface MapleCharacterOCIDResponse {
  ocid: string;
}

/**
 *  기본 정보 조회
 *  인기도 정보 조회
 *  종합 능력치 정보 조회
 *  하이퍼 스탯 정보 조회
 *  성향 정보 조회
 *  어빌리티 정보 조회
 */
export interface MapleCharacterInfoRequest {
  ocid: string;
  date: string; // YYYY-MM-DD
}

// 캐릭터 목록 조회
export interface CharacterList {
  ocid: string;
  character_name: string;
  world_name: string;
  character_class: string;
  character_level: number;
}
export interface CharacterAccountList {
  account_id: string;
  character_list: CharacterList[];
}
export interface MapleCharacterListResponse {
  account_list: CharacterAccountList[];
}

// 캐릭터 기본 정보 조회
export interface MapleCharacterBasicInfoResponse {
  date: string;
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
  character_date_create: string;
  access_flag: string;
  liberation_quest_clear_flag: string;
}

// 캐릭터 인기도 정보 조회
export interface MapleCharacterPopularityResponse {
  date: string;
  popularity: number;
}

// 캐릭터 종합 능력치 조회
export interface MapleCharacterStat {
  stat_name: string;
  stat_value: string;
}
export interface MapleCharacterStatResponse {
  date: string;
  character_class: string;
  final_stat: MapleCharacterStat[];
  remain_ap: number;
}

// 캐릭터 하이퍼 스탯 조회
export interface HyperStat {
  stat_type: string;
  stat_point: number;
  stat_level: number;
  stat_increase: string;
}
export interface MapleHyperStatResponse {
  date: string;
  character_class: string;
  use_preset_no: string;
  use_available_hyper_stat: number;
  hyper_stat_preset_1: HyperStat[];
  hyper_stat_preset_1_remain_point: number;
  hyper_stat_preset_2: HyperStat[];
  hyper_stat_preset_2_remain_point: number;
  hyper_stat_preset_3: HyperStat[];
  hyper_stat_preset_3_remain_point: number;
}

// 캐릭터 성향 정보 조회
export interface MapleCharacterPropensityResponse {
  date: string;
  charisma_level: number;
  sensibility_level: number;
  insight_level: number;
  willingness_level: number;
  handicraft_level: number;
  charm_level: number;
}

// 캐릭터 어빌리티 조회
export interface MapleAbilityInfo {
  ability_no: string;
  ability_grade: string;
  ability_value: string;
}
export interface MapleCharacterAbilityResponse {
  date: string;
  ability_grade: string;
  ability_info: MapleAbilityInfo[];
  remain_fame: number;
  preset_no: number;
  ability_preset_1: {
    ability_preset_grade: string;
    ability_info: MapleAbilityInfo[];
  };
  ability_preset_2: {
    ability_preset_grade: string;
    ability_info: MapleAbilityInfo[];
  };
  ability_preset_3: {
    ability_preset_grade: string;
    ability_info: MapleAbilityInfo[];
  };
}

// 캐릭터 장착 장비 정보 조회 (캐시 장비 제외)
export interface StatOption {
  str: string;
  dex: string;
  int: string;
  luk: string;
  max_hp: string;
  max_mp: string;
  attack_power: string;
  magic_power: string;
  armor?: string;
  speed?: string;
  jump?: string;
  boss_damage?: string;
  ignore_monster_armor?: string;
  all_stat?: string;
  damage?: string;
  equipment_level_decrease?: number;
  max_hp_rate?: string;
  max_mp_rate?: string;
  exceptional_upgrade?: number;
}

export interface EquipmentItem {
  item_equipment_part: string;
  item_equipment_slot?: string;
  equipment_slot?: string;
  item_name: string;
  item_icon: string;
  item_description: string;
  item_shape_name: string;
  item_shape_icon: string;
  item_gender: string;

  item_total_option: StatOption;
  item_base_option: StatOption;
  item_exceptional_option: StatOption;
  item_add_option: StatOption;
  item_etc_option: StatOption;
  item_starforce_option: StatOption;

  potential_option_flag?: string;
  additional_potential_option_flag?: string;
  potential_option_grade?: string;
  additional_potential_option_grade?: string;
  potential_option_1?: string;
  potential_option_2?: string;
  potential_option_3?: string;
  additional_potential_option_1?: string;
  additional_potential_option_2?: string;
  additional_potential_option_3?: string;

  equipment_level_increase: number;
  growth_exp: number;
  growth_level: number;

  scroll_upgrade: string;
  cuttable_count: string;
  golden_hammer_flag: string;
  scroll_resilience_count: string;
  scroll_upgradable_count: string;

  soul_name: string;
  soul_option: string;

  starforce: string;
  starforce_scroll_flag: string;

  special_ring_level: number;
  date_expire: string;
}

export interface Title {
  title_name: string;
  title_icon: string;
  title_description: string;
  date_expire: string;
  date_option_expire: string;
  title_shape_name: string;
  title_shape_icon: string;
  title_shape_description: string;
}

export interface MedalShape {
  medal_shape_name: string;
  medal_shape_icon: string;
  medal_shape_description: string;
  medal_shape_changed_name: string;
  medal_shape_changed_icon: string;
  medal_shape_changed_description: string;
}

export interface MapleCharacterItemEquipmentResponse {
  date: string;
  character_gender: string;
  character_class: string;
  preset_no: number;

  item_equipment: EquipmentItem[];
  item_equipment_preset_1: EquipmentItem[];
  item_equipment_preset_2: EquipmentItem[];
  item_equipment_preset_3: EquipmentItem[];

  title: Title;
  medal_shape: MedalShape;

  dragon_equipment: EquipmentItem[];
  mechanic_equipment: EquipmentItem[];
}

// 캐릭터 장착 캐시 장비 정보 조회
export interface CashItemOption {
  option_type: string;
  option_value: string;
}

export interface CashItemColoringPrism {
  color_range: string;
  hue: number;
  saturation: number;
  value: number;
}

export interface CashItem {
  cash_item_equipment_part: string;
  cash_item_equipment_slot: string;
  cash_item_name: string;
  cash_item_icon: string;
  cash_item_description: string;
  cash_item_option: CashItemOption[];
  date_expire: string;
  date_option_expire: string;
  cash_item_label: string;
  cash_item_coloring_prism: CashItemColoringPrism;
  item_gender: string;
  skill: string[];
}

export interface MapleCharacterCashItemEquipmentResponse {
  date: string;
  character_gender: string;
  character_class: string;
  character_look_mode: string;
  preset_no: number;

  cash_item_equipment_base: CashItem[];
  cash_item_equipment_preset_1: CashItem[];
  cash_item_equipment_preset_2: CashItem[];
  cash_item_equipment_preset_3: CashItem[];

  additional_cash_item_equipment_base: CashItem[];
  additional_cash_item_equipment_preset_1: CashItem[];
  additional_cash_item_equipment_preset_2: CashItem[];
  additional_cash_item_equipment_preset_3: CashItem[];
}

// 캐릭터 장착 심볼 정보 조회
export interface SymbolEquipment {
  symbol_name: string;
  symbol_icon: string;
  symbol_description: string;
  symbol_force: string;
  symbol_level: number;
  symbol_str: string;
  symbol_dex: string;
  symbol_int: string;
  symbol_luk: string;
  symbol_hp: string;
  symbol_drop_rate: string;
  symbol_meso_rate: string;
  symbol_exp_rate: string;
  symbol_growth_count: number;
  symbol_require_growth_count: number;
}
export interface MapleCharacterSymbolEquipmentResponse {
  date: string;
  character_class: string;
  symbol: SymbolEquipment[];
}

// 캐릭터 적용 세트 효과 정보 조회
export interface SetEffectInfo {
  set_count: number;
  set_option: string;
}
export interface SetEffect {
  set_name: string;
  total_set_count: number;
  set_effect_info: SetEffectInfo[];
  set_effect_full_info: SetEffectInfo[];
}
export interface MapleCharacterSetEffectResponse {
  date: string;
  set_effect: SetEffect[];
}

// 캐릭터 장착중인 헤어, 성형, 피부 정보 조회
export interface CharacterHair {
  hair_name: string;
  base_color: string;
  mix_color: string;
  mix_rate: string;
}
export interface CharacterFace {
  face_name: string;
  base_color: string;
  mix_color: string;
  mix_rate: string;
}
export interface CharacterSkin {
  skin_name: string;
  color_style: string;
  hue: number;
  saturation: number;
  brightness: number;
}
export interface MapleBeautyEquipmentResponse {
  date: string;
  character_gender: string;
  character_class: string;
  character_hair: CharacterHair;
  character_face: CharacterFace;
  character_skin: CharacterSkin;
  additional_character_hair: CharacterHair;
  additional_character_face: CharacterFace;
  additional_character_skin: CharacterSkin;
}

// 캐릭터 장착중인 안드로이드 정보 조회
export interface AndroidColorMix {
  hair_name: string;
  base_color: string;
  mix_color: string;
  mix_rate: string;
}

export interface AndroidFaceColor {
  face_name: string;
  base_color: string;
  mix_color: string;
  mix_rate: string;
}

export interface AndroidSkinColor {
  skin_name: string;
  color_style: string;
  hue: number;
  saturation: number;
  brightness: number;
}

export interface CashItemOption {
  option_type: string;
  option_value: string;
}

export interface CashItemColoringPrism {
  color_range: string;
  hue: number;
  saturation: number;
  value: number;
}

export interface AndroidCashItem {
  cash_item_equipment_part: string;
  cash_item_equipment_slot: string;
  cash_item_name: string;
  cash_item_icon: string;
  cash_item_description: string;
  cash_item_option: CashItemOption[];
  date_expire: string;
  date_option_expire: string;
  cash_item_label: string;
  cash_item_coloring_prism: CashItemColoringPrism;
  android_item_gender: string;
}

export interface AndroidPreset {
  android_name: string;
  android_nickname: string;
  android_icon: string;
  android_description: string;
  android_gender: string;
  android_grade: string;
  android_skin: AndroidSkinColor;
  android_hair: AndroidColorMix;
  android_face: AndroidFaceColor;
  android_ear_sensor_clip_flag: string;
  android_non_humanoid_flag: string;
  android_shop_usable_flag: string;
}
export interface MapleCharacterAndroidEquipmentResponse {
  date: string;
  android_name: string;
  android_nickname: string;
  android_icon: string;
  android_description: string;
  android_hair: AndroidColorMix;
  android_face: AndroidFaceColor;
  android_skin: AndroidSkinColor;
  android_cash_item_equipment: AndroidCashItem[];

  android_ear_sensor_clip_flag: string;
  android_gender: string;
  android_grade: string;
  android_non_humanoid_flag: string;
  android_shop_usable_flag: string;

  preset_no: number;
  android_preset_1: AndroidPreset;
  android_preset_2: AndroidPreset;
  android_preset_3: AndroidPreset;
}

// 캐릭터 장착중인 펫 정보 조회
export interface PetItemOption {
  option_type: string;
  option_value: string;
}
export interface PetEquipment {
  item_name: string;
  item_icon: string;
  item_description: string;
  item_option: PetItemOption[];
  scroll_upgrade: number;
  scroll_upgradable: number;
  item_shape: string;
  item_shape_icon: string;
}
export interface PetAutoSkill {
  skill_1: string;
  skill_1_icon: string;
  skill_2: string;
  skill_2_icon: string;
}
export interface Pet {
  name: string;
  nickname: string;
  icon: string;
  description: string;
  equipment: PetEquipment;
  auto_skill: PetAutoSkill;
  pet_type: string;
  skill: string[];
  date_expire: string;
  appearance: string;
  appearance_icon: string;
}
export interface MapleCharacterPetEquipmentResponse {
  date: string;
  pet_1: Pet;
  pet_2: Pet;
  pet_3: Pet;
}
