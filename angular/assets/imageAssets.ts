export interface ImageAsset {
    src: string;
    alt: string;
}

export function getImagePath(fileName: string): string {
    return imageAssetPath + fileName;
}
export function getLogoImagePath(fileName: string): string {
    return logoImageAssetPath + fileName;
}
export function getIconImagePath(fileName: string): string {
    return iconImageAssetPath + fileName;
}

const imageAssetPath: string = 'assets/images/';
const logoImageAssetPath: string = imageAssetPath + 'logo/';
const iconImageAssetPath: string = imageAssetPath + 'icon/';

export const plusIconImageAsset: ImageAsset = {
    src: getIconImagePath('plus_icon.svg'),
    alt: 'Plus Icon'
};
export const whitePlusIconImageAsset: ImageAsset = {
    src: getIconImagePath('white_plus_icon.svg'),
    alt: 'White Plus Icon'
};
export const homeIconImageAsset: ImageAsset = {
    src: getIconImagePath('home_icon.svg'),
    alt: 'Home Icon'
}