export default function createInt8TypedArray(length, position, value) {
  const int8View = new DataView(new ArrayBuffer(length));
  if (position <= int8View.byteLength) {
    int8View.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }

  return int8View;
}
