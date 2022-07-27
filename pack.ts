import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

pack.addFormula({
  name: "CreateNiftiViewer",
  description: "Downloads a Nifti image from a URL and presents it with a slider view",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: "downloadURL",
      description: "The URL to download the Nifti image from",
    }),
  ],
  resultType: coda.ValueType.String,
  schema: {
    type: coda.ValueType.String,
    codaType: coda.ValueHintType.Embed,
    force: true,
  },
  execute: async function ([downloadURL], context) {
    return `https://jrmkim50.github.io/js-nifti-viewer/?downloadURL=${downloadURL}`;
  },
});
