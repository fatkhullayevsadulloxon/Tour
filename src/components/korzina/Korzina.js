import { Link } from "react-router-dom"

const korzina = JSON.parse(window.localStorage.getItem("korzina"))

export const Korzina = () => {
    return (
        <>
                <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Savatcha
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content bg-dark">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Savatcha</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}