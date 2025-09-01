import { Widget } from "@/components/Widget"

export const revalidate = 60;

export default function Home() {
  const widgets = [
    {
      src: "https://diogobotton.github.io/POC_WebComponents/hello-world.js", tag: "hello-world"
    },
    {
      src: "https://diogobotton.github.io/POC_WebComponents/widget.es.js", tag: "portfolio-widget", name: "Diogo Botton", githubUrl: "https://github.com/DiogoBotton"
    },
    {
      src: "https://diogobotton.github.io/POC_WebComponents/widget.es.js", tag: "portfolio-widget", name: "Gabriel Dias", githubUrl: "https://github.com/gabrieldiasss"
    }
  ]

  return (
    <div>
      <h1>Home</h1>
      <div className="flex justify-center">
        <div className="flex flex-col justify-evenly align-middle h-[100vh] w-100">
          {widgets.map((w, i) => (
            <Widget key={i} src={w.src} tag={w.tag} name={w.name} githubUrl={w.githubUrl} />
          ))}
        </div>
      </div>
    </div>
  )
}