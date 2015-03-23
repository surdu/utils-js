// used to fill in window and document
// in case node.js includes the library
// in order to ease the checks in the
// rest of the library

if (typeof window === "undefined")
{
  window = {};
}

if (typeof document === "undefined")
{
  document = {};
}
