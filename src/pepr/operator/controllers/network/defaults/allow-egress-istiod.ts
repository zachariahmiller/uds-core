import { Direction } from "../../../crd";
import { generate } from "../generate";

export const allowEgressIstiod = (namespace: string) =>
  generate(namespace, {
    direction: Direction.Egress,
    description: "Istiod communication",
    remoteNamespace: "istio-system",
    remotePodLabels: {
      istio: "pilot",
    },
    port: 15012,
  });
