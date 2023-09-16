import React from 'react';
import Image from 'next/image';
import { comment } from 'postcss';
import useResource from 'hooks/useResource';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt, faEdit);

export default function Details({ productId, comments, decodedToken, products }) {

    const { response, createResource, deleteResource } = useResource("comment/")
    
    
    function handleCommentDelete (id){
        deleteResource(id)
    }

    const productDelete = useResource().deleteResource
    function handleProductDelete(id){
        productDelete(id)
    }



    const updateResource_comment = useResource("comment/").updateResource
    const [editMode, setEditMode] = useState(false);
    const [editedComment, setEditedComment] = useState('');
    const [comBody, setcomBody] = useState({})
    const [commentId, setcommentId] = useState('')
    
    function handleEditComment(commentId) {
        const commentToEdit = comments.find((c) => c.id === commentId);
        if (commentToEdit) {
          setEditMode(true);
          setEditedComment(commentToEdit.body);
    
        setcommentId(commentId)
        comBody.body = editedComment
        comBody.email = decodedToken.email
        comBody.owner = decodedToken.user_id
        comBody.product = productId
        }
      }
      
      function handleSaveComment() {
        // Save the edited comment here using the createResource_comment function or any appropriate method.
        // After saving, exit edit mode.
        setEditMode(false);
        updateResource_comment(comBody,commentId)
        
      }
    
    
    
    const createResource_fav = useResource("Favourite_product").createResource
    function handleAddToFav(productId) {
        const body = {
            owner: decodedToken.user_id,
            Product: productId,
            owner_name: decodedToken.username,
        }
        createResource_fav(body)
    }



    let body = {}
    function addComment(ownerId, productId) {
        body.owner = ownerId
        body.Product = productId

    }
    const createResource_comment = useResource("comment").createResource
    function handleAddComment(event) {

        event.preventDefault()
        body.owner_name = decodedToken.username
        body.email = decodedToken.email
        body.body = event.target.comment.value
        createResource_comment(body)
    }






    return (
        <div className='outDetail'>

            <div className='detailBody'>
                {/* {console.log(7777777,comments)} */}
                {/* {console.log(88888, decodedToken)} */}
                {/* {console.log(99999,products)} */}
                {products ? (products.map((product) => <div >{product.id == productId ?

                    <div>

                        <div className='detailCard'>

                            <div className='detailImageC'>
                                <Image className='detailImage' src={product.image} alt={product.Title} width='500' height='400' />
                            </div>

                            <div class="vl"></div>

                            <div className='detailTexts'>

                                <h2 className='detailTitle'>{product.Title}</h2>
                                <p className='detailDescription'><p className='Details'>Details:</p>{product.description}</p>
                                <p className='detailPrice'>CURRENT PRICE: &nbsp;&nbsp;<p className='jo'>{product.price} J</p></p>
                                <p className='detailContact'><p className='ContactInfo'>Contact Info: &nbsp;</p><p className='number'>{product.contact_info}</p></p>
                                {decodedToken ? <div className='DButtons'><button key={product.id} onClick={() => handleAddToFav(product.id)} className='button-33' role="button">Add To Fav</button>
                                {decodedToken.user_id == product.owner ? <Link href="/profile"><button key={product.id} onClick={() => handleProductDelete(product.id)} className='button-34' role="button">Remove</button></Link>:''}</div> : <p></p>}




                            </div>

                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            {/* {decodedToken ? <div className='detailHeart' key={product.id} onClick={() => handleAddToFav(product.id)}><i class="fa fa-heart"></i></div> : <p></p>} */}


                        </div>

                        <p className='commentSection'>Comments</p>
                        
                            
                            
                            {comments ? (comments.map((comment) => comment.Product == product.id ? <div className='commentSection_1'> 
                            <div className='commentSection_1_1'><img className='commentImage' src='https://img.freepik.com/premium-vector/fox-logo-design_104950-572.jpg' alt='fox' width='40' height='40'/> 
                            <p className='commentusername'>{comment.owner_name}</p>
                            {editMode && decodedToken.user_id == comment.owner ? (<input className='commentInput' type="text" value={editedComment} onChange={(e) => setEditedComment(e.target.value)}/>
                            ) : (<p className="commentitself">{comment.body}</p>)}
                            </div><p className='creationtime'>{comment.time_since_creation[0] ? comment.time_since_creation[8] == 0 ? comment.time_since_creation.slice(17,)+' ago' : 
                            comment.time_since_creation.slice(8,15)+" ago" : comment.time_since_creation.slice(0,5)+"ago"}</p> {decodedToken && decodedToken.user_id === comment.owner ? (
                                <>
                                  <FontAwesomeIcon
                                    icon="edit"
                                    className="editIcon"
                                    onClick={() => handleEditComment(comment.id)}
                                    />
                                  <FontAwesomeIcon
                                    icon="trash-alt"
                                    className="deleteIcon"
                                    onClick={() => handleCommentDelete(comment.id)}
                                    />
                                  {editMode ? (
                                    <button className="saveButton" onClick={handleSaveComment}>
                                        Save
                                    </button>
                                    ) : null}
                                </>
                              ) : null}</div>  : <p></p>)) : <p></p>}
                           

                            {decodedToken ? (<form className='addCommentForm' onSubmit={handleAddComment}>

                                <div className="page">
                                    <div className="field field_v1">
                                        <label for="first-name" className="ha-screen-reader">Text</label>
                                        <input name="comment" id="first-name" className="field__input" placeholder=""/>
                                            <span className="field__label-wrap" aria-hidden="true">
                                                <span className="field__label">Text</span>
                                            </span>
                                    </div>
                                    
                                    
                                </div>
                                

                                <button class="button-36" role="button" type='submit' onClick={() => addComment(decodedToken.user_id, product.id)}>Add Comment</button>
                            </form>
                            ) : ''}
                        
                    
                    </div> 
                    


                    : <p></p>}</div>)) : <p></p>}

            </div>

        </div>



    )
}











