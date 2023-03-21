import dynamic from "next/dynamic";

// @ts-expect-error Federated module
const BoringPage = dynamic(() => import("portal/pages/BoringPage"), {
  ssr: false,
});

export default BoringPage;
