import { XMLParser } from 'fast-xml-parser';

const parseXml2Json = (xml: string = '') => {
  if (!xml) return null;

  const parser = new XMLParser();
  const data = parser.parse(xml);

  return data;
};

export default parseXml2Json;
