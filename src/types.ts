/// <reference types="node" />

// biome-ignore lint/suspicious/noExplicitAny: pyreon component plumbing
export interface AnyComponent<P = any> {
  // biome-ignore lint/suspicious/noExplicitAny: pyreon component plumbing
  (props: P): any;
  displayName?: string;
  name?: string;
}

export type ExtractProps<TComponentOrTProps> =
  TComponentOrTProps extends AnyComponent<infer P> ? P : TComponentOrTProps;
