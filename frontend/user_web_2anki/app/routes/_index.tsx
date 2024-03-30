import {Upload} from '~/features/Upload/Upload'

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Upload your notes" },
    { name: "description", content: "Create Anki flashcards from your notes!" },
  ];
};

export default function Index() {
  return <Upload></Upload>;
}
