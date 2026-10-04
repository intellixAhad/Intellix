// Shared easing curve for all motion components — smooth "expo-out" settle,
// no bounce or overshoot. Keep this one curve everywhere so every animated
// element on the page feels like it belongs to the same system.
export const EASE = [0.16, 1, 0.3, 1] as const;
