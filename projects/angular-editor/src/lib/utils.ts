export function isDefined(value: any) {
  return value !== undefined && value !== null;
}

export function isIE11(): boolean {
  return /Trident/.test( navigator.userAgent );
}
