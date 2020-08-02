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
    <Modal show={isOpen} onHide={handleHideModal}>
      {!id && <p>Loading...</p>}
      {id && (
        <>
          {videoUrl && (
            <Modal.Header>
              <VideoFormacao url={videoUrl} />
            </Modal.Header>
          )}
          <Modal.Body>
            <Modal.Title>{title}</Modal.Title>
            <p>{metaDescription.raw}</p>
            <p>{`${estimatedTimeToFinish}h`}</p>
            <p>{`${totalPublishedCourses} cursos`}</p>
            <p>{`${totalVideos} vídeos extras`}</p>
            <p>{`${totalPodcasts} podcasts`}</p>
            <p>{`${totalPosts} artigo`}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleHideModal}>Cancel</Button>
            <Button
              as="a"
              target="_blank"
              href={`https://alura.com.br/formacao-${code}`}
            >{`Acessar o site da Formação ${title}`}</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
