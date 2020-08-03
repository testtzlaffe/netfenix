import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoFormacao from "../VideoFormacao";

export default function ModalFormacao({ isOpen, handleHideModal, formacao }) {
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
      {!id && <p>Loading...</p>}
      {id && (
        <>
          {/* {videoUrl && (
            <Modal.Header>
              <VideoFormacao url={videoUrl} />
            </Modal.Header>
          )} */}
          <Modal.Body>
            <Modal.Title>{title}</Modal.Title>
            <p>{metaDescription.raw}</p>
            <div>
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
            <Button variant="outline-secondary" onClick={handleHideModal}>
              X
            </Button>
            <Button
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
