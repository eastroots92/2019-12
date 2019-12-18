enum imageTypeEnum {
  mainEventImg,
  eventDetailImg,
  eventDetailRegisterImg,
}

export interface ImageType {
  width: number;
  height: number;
  type: 'f';
}

export const imageTypes: Record<keyof typeof imageTypeEnum, ImageType> = {
  mainEventImg: {
    width: 240,
    height: 135,
    type: 'f',
  },
  eventDetailImg: {
    width: 688,
    height: 387,
    type: 'f',
  },
  eventDetailRegisterImg: { width: 688, height: 387, type: 'f' },
};
