import { gql } from '@apollo/client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React, { useEffect, useState } from 'react'
import { apolloClient } from '../../client/lens/apollo-client'

export default function ExampleLens() {
    const [users, setUsers] = useState([] as any[])
    const fetchUsers = async () => {
        let query = gql`
            query ExploreProfiles {
                exploreProfiles(request: { sortCriteria: MOST_FOLLOWERS }) {
                    items {
                        id
                        name
                        handle
                        picture {
                            ... on NftImage {
                                uri
                            }
                            ... on MediaSet {
                                original {
                                    url
                                    mimeType
                                }
                            }
                        }
                        stats {
                            totalFollowers
                            totalFollowing
                            totalPosts
                        }
                    }
                }
            }
        `
        const { data } = await apolloClient.query({ query })
        setUsers(data.exploreProfiles.items)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.handle}</p>
                </div>
            ))}
        </div>
    )
}
