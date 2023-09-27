import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import Picture from './image.jpeg';

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ['Comic Sans'],
    },
    extend: {
      colors: {
        custom: '#bada55',
      },
    },
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page size={'A4'}>
        <Text
          style={tw(
            `bg-red-200 p-4 text-3xl flex justify-center items-center text-center m-10 rounded-full`
          )}
        >
          Damian is here!!!
        </Text>
        <Image src={Picture} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          voluptatibus doloribus aut illum porro saepe, doloremque quis quam
          iste beatae, expedita rerum perspiciatis inventore. Amet, in dolore
          laudantium quo, explicabo distinctio minus tenetur eligendi
          temporibus, architecto tempore iste quaerat voluptas?
        </Text>
        <Text
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
