import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import VideoFormacao from "../VideoFormacao";

export default function ModalFormacao(props) {
  const { isOpen, handleHideModal, formacao } = props;

  const {
    id,
    title,
    code,
    metaDescription,
    estimatedTimeToFinish,
    totalPublishedCourses,
    totalPodcasts,
    totalPosts,
    totalVideos,
    videoUrl,
  } = formacao;

  return (
    <Modal className="modal" show={isOpen} onHide={handleHideModal}>
      {!id && <p>Carregando dados da formação...</p>}
      {id && (
        <>
          {/* {videoUrl && (
            <Modal.Header>
              <VideoFormacao url={videoUrl} />
            </Modal.Header>
          )} */}
          <Modal.Body>
            <Modal.Title>
              <div className="titleContainer">
                <div className="title">{title}</div>
                <div>
                  <span onClick={handleHideModal} className="fechar">
                    Fechar
                  </span>
                </div>
              </div>
            </Modal.Title>
            <p>{metaDescription.raw}</p>
            <div className="numerosModal">
              <span>{`${estimatedTimeToFinish}h`}</span>
              <span> | {`${totalPublishedCourses} cursos`}</span>
              {totalVideos > 1 && (
                <span> | {`${totalVideos} vídeos extras`}</span>
              )}
              {totalVideos === 1 && (
                <span> | {`${totalVideos} vídeo extra`}</span>
              )}
              {totalPodcasts > 1 && (
                <span> | {`${totalPodcasts} podcasts`}</span>
              )}
              {totalPodcasts === 1 && (
                <span> | {`${totalPodcasts} podcast`}</span>
              )}
              {totalPosts > 1 && <span> | {`${totalPosts} artigos`}</span>}
              {totalPosts === 1 && <span> | {`${totalPosts} artigo`}</span>}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="botaoFooter"
              as="a"
              target="_blank"
              href={`https://alura.com.br/formacao-${code}`}
            >{`Acessar o site desta formação`}</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
