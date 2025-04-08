import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import path from 'path';

const interMediumArrayBuffer = readFileSync(path.join(process.cwd(), 'static', 'inter/Inter_18pt-Medium.ttf'));
const interSemoBoldArrayBuffer = readFileSync(path.join(process.cwd(), 'static', 'inter/Inter_18pt-SemiBold.ttf'));

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const logo = searchParams.get('logo');
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    return new ImageResponse(
      (
          <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#232225',
            color: 'white',
            padding: '80px',
          }}
        >
          {/* biome-ignore lint/a11y/useAltText: */}
          {logo && <img src={logo} height="60px" style={{ marginTop: 48 }} />}
          <div style={{ fontSize: '42px', marginTop: 48, marginBottom: -12, fontFamily: 'Inter', fontWeight: 600 }}>{title}</div>
          {description && <div style={{ opacity: 0.8, fontSize: '32px', marginTop: 24, fontFamily: 'Inter', fontWeight: 500 }}>{description}</div>}
        </div>
      ),
      {
        width: 1200,
        height: 800,
        fonts: [
          {
            name: 'Inter',
            data: interMediumArrayBuffer,
            weight: 500,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: interSemoBoldArrayBuffer,
            weight: 600,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
