/**
 *  메이플 캐릭터 API
 */

// 식별자 : 079aa01facbb8124311c61f667e21dc8
import { CommonRequest } from '../../models/commons/CommonModels';
import {
  MapleBeautyEquipmentResponse,
  MapleCharacterAbilityResponse,
  MapleCharacterAndroidEquipmentResponse,
  MapleCharacterBasicInfoResponse,
  MapleCharacterCashItemEquipmentResponse,
  MapleCharacterInfoRequest,
  MapleCharacterItemEquipmentResponse,
  MapleCharacterListResponse,
  MapleCharacterOCIDResponse,
  MapleCharacterPetEquipmentResponse,
  MapleCharacterPopularityResponse,
  MapleCharacterPropensityResponse,
  MapleCharacterSetEffectResponse,
  MapleCharacterStatResponse,
  MapleCharacterSymbolEquipmentResponse,
  MapleHyperStatResponse,
} from '../../models/maple/character/CharacterModel';
import { getRestApi } from '../../utils/ApiUtils';

const requestURL = 'open.api.nexon.com/maplestory/v1';

/**
 *  캐릭터 OCID 조회
 * @param name
 */
export const getCharacterOCID = async (name: string) => {
  const request: CommonRequest = {
    url: `${requestURL}/id?character_name=${name}`,
  };

  const response: MapleCharacterOCIDResponse = await getRestApi(request);

  console.log('캐릭터 OCID 조회', response);
  return response;
};

// 캐릭터 목록 조회
export const getCharacterList = async () => {
  const request: CommonRequest = {
    url: `${requestURL}/character/list`,
  };

  const response: MapleCharacterListResponse = await getRestApi(request);

  console.log('캐릭터 목록 조회', response);
  return response;
};

/**
 * 캐릭터 기본 정보 조회
 * @param params
 * @returns
 */
export const getCharacterBasicInfo = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/basic?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterBasicInfoResponse = await getRestApi(request);

  return response;
};

/**
 * 캐릭터 인기도 정보 조회
 * @param params
 * @returns
 */
export const getCharacterPopularity = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/popularity?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterPopularityResponse = await getRestApi(request);

  return response;
};

/**
 * 캐릭터 종합 능력치 조회
 * @param params
 * @returns
 */
export const getCharacterStatResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/stat?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterStatResponse = await getRestApi(request);

  return response;
};

/**
 * 캐릭터 하이퍼 스탯 조회
 * @param params
 * @returns
 */
export const getCharacterHyperStatResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/hyper-stat?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleHyperStatResponse = await getRestApi(request);

  return response;
};

/**
 * 캐릭터 성향 정보 조회
 * @param params
 * @returns
 */
export const getCharacterPropensityResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/propensity?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterPropensityResponse = await getRestApi(request);

  return response;
};

/**
 * 캐릭터 어빌리티 조회
 * @param params
 * @returns
 */
export const getCharacterAbilityResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/ability?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterAbilityResponse = await getRestApi(request);

  return response;
};

/**
 * 캐릭터 장착 장비 정보 조회 (캐시 장비 제외)
 * @param params
 */
export const getCharacterItemEquipmentResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/item-equipment?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterItemEquipmentResponse = await getRestApi(
    request
  );

  return response;
};

/**
 * 캐릭터 장착 캐시 장비 정보 조회
 * @param params
 * @returns
 */
export const getCharacterCashItemEquipmentResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/cashitem-equipment?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterCashItemEquipmentResponse = await getRestApi(
    request
  );

  return response;
};

/**
 * 캐릭터 장착 심볼 정보 조회
 * @param params
 * @returns
 */
export const getCharacterSymbolEquipmentResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/symbol-equipment?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterSymbolEquipmentResponse = await getRestApi(
    request
  );

  return response;
};

/**
 * 캐릭터 적용 세트 효과 정보 조회
 * @param params
 * @returns
 */
export const getCharacterSetEffectResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/set-effect?ocid=${params.ocid}&date=${params.date}`,
  };
  const response: MapleCharacterSetEffectResponse = await getRestApi(request);

  return response;
};

/**
 * 캐릭터 장착중인 헤어, 성형, 피부 정보 조회
 * @param params
 * @returns
 */
export const getCharacterBeautyEquipmentResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/beauty-equipment?ocid=${params.ocid}&date=${params.date}`,
  };
  const response: MapleBeautyEquipmentResponse = await getRestApi(request);

  return response;
};

/**
 * 캐릭터 장착중인 안드로이드 정보 조회
 * @param params
 * @returns
 */
export const getCharacterAndroidEquipmentResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/android-equipment?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterAndroidEquipmentResponse = await getRestApi(
    request
  );

  return response;
};

/**
 * 캐릭터 장착중인 펫 정보 조회
 * @param params
 * @returns
 */
export const getCharacterPetEquipmentResponse = async (
  params: MapleCharacterInfoRequest
) => {
  const request: CommonRequest = {
    url: `${requestURL}/character/pet-equipment?ocid=${params.ocid}&date=${params.date}`,
  };

  const response: MapleCharacterPetEquipmentResponse = await getRestApi(
    request
  );

  return response;
};
